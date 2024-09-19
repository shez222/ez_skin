const Jackpot = require('../models/jackpotSchema');
const Item = require('../models/itemSchema');
const User = require('../models/userSchema');
const io = require('../socket');
// const SteamTrade = require('steam-trade-api'); // Example Steam Trade API integration
// const User = require('./models/User'); // Ensure correct import of your User model

// Join the Jackpot
const joinJackpot = async (req, res) => {
  try {
    const { userId, itemIds } = req.body;

    // Validate user and items
    if (!userId || !itemIds || itemIds.length === 0) {
      return res.status(400).json({ error: 'User ID and item IDs are required' });
    }

    // Find or create the current jackpot (waiting or in-progress)
    let jackpot = await Jackpot.findOne({ status: { $in: ['in_progress', 'waiting'] } });
    if (!jackpot) {
      jackpot = new Jackpot({ status: 'waiting', totalValue: 0, participants: [] });
    }

    // Fetch the user and items
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const items = await Item.find({ _id: { $in: itemIds } });
    if (items.length === 0) return res.status(404).json({ error: 'No items found' });

    // Check if the user is already participating
    const existingParticipant = jackpot.participants.find(participant => participant.user.equals(user._id));

      // If user is not yet participating, add them with their items
      jackpot.participants.push({
        user: user._id,
        items: items.map(item => item._id)
      });

    // Calculate the total value of the items added to the jackpot
    const totalValue = items.reduce((acc, item) => {
      const itemValue = parseFloat(item.value); // Convert item value to a float
      if (!isNaN(itemValue)) {
        return acc + itemValue;
      }
      return acc; // Skip invalid item values
    }, 0);

    jackpot.totalValue += totalValue;

    // If there are 2 or more participants, move to 'in-progress'
    if (jackpot.participants.length >= 2 && jackpot.status === 'waiting') {
      jackpot.status = 'in_progress';
    }

    // Save the jackpot
    const updatedJackpot = await jackpot.save();
    io.getIO().emit('jackpots', {
      action: 'update',
      jackpot: updatedJackpot
    })

    res.json({ success: true, jackpot });
  } catch (error) {
    console.error('Error joining jackpot:', error);
    res.status(500).json({ error: error.message });
  }
};


// Get Jackpot Status
const getJackpotStatus = async (req, res) => {
  try {
    // Find a jackpot that is either 'in_progress' or 'waiting'
    let jackpot = await Jackpot.findOne({ status: { $in: ['in_progress', 'waiting'] } })
      .populate('participants.user')  // Populate participant user details
      .populate('participants.items') // Populate participant items
      .populate('winner');            // Populate winner details if available

    // If no jackpot is found, return a 404 error
    if (!jackpot) {
      return res.status(404).json({ error: 'No active jackpot found' });
    }

    // Respond with the jackpot data
    res.json(jackpot);
  } catch (error) {
    console.error('Error fetching jackpot status:', error);
    res.status(500).json({ error: error.message });
  }
};


// Complete the Jackpot
const completeJackpot = async (req, res) => {
  try {
    const { jackpotId } = req.body;

    const jackpot = await Jackpot.findById(jackpotId)
      .populate('participants.user')
      .populate('participants.items');
      
    
    if (!jackpot || jackpot.status !== 'in_progress') {
      return res.status(404).json({ error: 'Jackpot not found or already completed' });
    }

    const totalValue = jackpot.totalValue;
    let winner = null;

    // Calculate odds for each participant based on the value of their items
    const participantsWithOdds = jackpot.participants.map(participant => {
      const participantValue = participant.items.reduce((acc, item) => acc + item.value, 0);
      const odds = participantValue / totalValue;
      return { participant: participant.user, odds };
    });

    // Select a winner based on calculated odds
    const randomValue = Math.random();
    let cumulativeOdds = 0;
    for (const { participant, odds } of participantsWithOdds) {
      cumulativeOdds += odds;
      if (randomValue <= cumulativeOdds) {
        winner = participant;
        break;
      }
    }

    if (winner) {
      // Calculate commission and transfer items to the winner
      const commissionValue = (jackpot.totalValue * jackpot.commissionPercentage) / 100;
      const winnings = jackpot.totalValue - commissionValue;

      // Implement trade logic here (e.g., using Steam API)
      // await transferWinningsToWinner(winner, jackpot.items, winnings);

      // Mark the jackpot as completed
      jackpot.status = 'completed';
      jackpot.winner = winner._id;
      await jackpot.save();

      return res.json({ success: true, jackpot });
    }

  } catch (error) {
    console.error('Error completing jackpot:', error);
    res.status(500).json({ error: error.message });
  }
};



// const completeJackpot = async (req, res) => {
//   try {
//     const { jackpotId } = req.body;

//     const jackpot = await Jackpot.findById(jackpotId)
//       .populate('participants.user')
//       .populate('participants.items');
    
//     if (!jackpot || jackpot.status !== 'in_progress') {
//       return res.status(404).json({ error: 'Jackpot not found or already completed' });
//     }

//     const totalValue = jackpot.totalValue;
//     let winner = null;

//     // Calculate odds for each participant
//     const participantsWithOdds = jackpot.participants.map(participant => {
//       const participantValue = participant.items.reduce((acc, item) => acc + item.value, 0);
//       const odds = participantValue / totalValue;
//       return { participant: participant.user, odds };
//     });

//     // Select a winner
//     const randomValue = Math.random();
//     let cumulativeOdds = 0;
//     for (const { participant, odds } of participantsWithOdds) {
//       cumulativeOdds += odds;
//       if (randomValue <= cumulativeOdds) {
//         winner = participant;
//         break;
//       }
//     }

//     if (winner) {
//       // Calculate commission and winnings
//       const commissionValue = (totalValue * jackpot.commissionPercentage) / 100;
//       const winnings = totalValue - commissionValue;

//       // **Trade Logic: Transfer items to the winner**
//       const tradeOfferUrl = await sendTradeOffer(jackpot, winner);
//       if (!tradeOfferUrl) {
//         return res.status(500).json({ error: 'Failed to send trade offer' });
//       }

//       // Mark the jackpot as completed and assign the winner
//       jackpot.status = 'completed';
//       jackpot.winner = winner._id;
//       await jackpot.save();

//       return res.json({ success: true, jackpot, tradeOfferUrl });
//     } else {
//       return res.status(400).json({ error: 'Unable to determine a winner' });
//     }

//   } catch (error) {
//     console.error('Error completing jackpot:', error);
//     res.status(500).json({ error: error.message });
//   }
// };

// /**
//  * Send a trade offer to the winner using the Steam API
//  * @param {Object} jackpot - The jackpot data
//  * @param {Object} winner - The winning user object
//  * @returns {String} - Trade offer URL or null if failed
//  */
// async function sendTradeOffer(jackpot, winner) {
//   try {
//     // Get the winner's Steam trade URL
//     const winnerUser = await User.findById(winner._id); // Fetch the winner's user data (ensure the Steam trade URL is stored in the user model)
//     const winnerTradeUrl = winnerUser.steamTradeUrl;

//     if (!winnerTradeUrl) {
//       throw new Error('Winner does not have a Steam trade URL');
//     }

//     // Create trade offer using the Steam API
//     const trade = new SteamTrade();
//     trade.setupTrade(winnerTradeUrl);

//     // Add all items from the jackpot to the trade offer
//     for (const participant of jackpot.participants) {
//       for (const item of participant.items) {
//         trade.addItem(item); // Assuming `item` has all required Steam information (e.g., item ID, asset ID)
//       }
//     }

//     // Send the trade offer
//     const tradeOfferUrl = await trade.sendTrade(); // `sendTrade` would return a trade offer URL or confirmation

//     return tradeOfferUrl; // Return the trade offer URL
//   } catch (error) {
//     console.error('Error sending trade offer:', error);
//     return null;
//   }
// }



// Export the functions
module.exports = {
  getJackpotStatus,
  joinJackpot,
  completeJackpot
};













// const Jackpot = require('../models/jackpotSchema');
// const Item = require('../models/itemSchema');
// const User = require('../models/userSchema');

// const joinJackpot = async (req, res) => {
//   try {
//     const { userId, itemIds } = req.body; // Assume itemIds is an array of selected item IDs

//     // Find or create the current jackpot
//     let jackpot = await Jackpot.findOne({ status: 'in_progress' });
//     if (!jackpot) {
//       jackpot = new Jackpot();
//     }

//     // Add the user and items to the jackpot
//     const user = await User.findById(userId);
//     const items = await Item.find({ _id: { $in: itemIds } });

//     jackpot.participants.push(user._id);
//     jackpot.items.push(...items.map(item => item._id));

//     // Calculate the total value of the jackpot
//     const totalValue = items.reduce((acc, item) => acc + item.value, 0);
//     jackpot.totalValue += totalValue;

//     // Save the jackpot
//     await jackpot.save();

//     // Start the countdown if there are at least two participants
//     if (jackpot.participants.length >= 2 && jackpot.status === 'waiting') {
//       jackpot.status = 'in_progress';
//       setTimeout(async () => {
//         await this.completeJackpot(jackpot._id);
//       }, jackpot.countdown * 1000);
//     }

//     res.json({ success: true, jackpot });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getJackpotStatus = async (req, res) => {
//     try {
//       const jackpot = await Jackpot.findOne({ status: 'in_progress' }).populate('items').populate('participants');
//       if (!jackpot) {
//         return res.status(404).json({ error: 'No active jackpot found.' });
//       }
//       res.json(jackpot);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  


// const completeJackpot = async (jackpotId) => {
//     try {
//       const jackpot = await Jackpot.findById(jackpotId).populate('items').populate('participants');
//       if (!jackpot || jackpot.status !== 'in_progress') {
//         return;
//       }
  
//       // Calculate odds for each participant
//       const totalValue = jackpot.totalValue;
//       let winner = null;
//       const participantsWithOdds = jackpot.participants.map(participant => {
//         const participantItems = jackpot.items.filter(item => item.owner.equals(participant._id));
//         const participantValue = participantItems.reduce((acc, item) => acc + item.value, 0);
//         const odds = participantValue / totalValue;
//         return { participant, odds };
//       });
  
//       // Select a winner based on odds
//       const randomValue = Math.random();
//       let cumulativeOdds = 0;
//       for (const { participant, odds } of participantsWithOdds) {
//         cumulativeOdds += odds;
//         if (randomValue <= cumulativeOdds) {
//           winner = participant;
//           break;
//         }
//       }
  
//       if (winner) {
//         // Calculate commission and transfer items
//         const commissionValue = (jackpot.totalValue * jackpot.commissionPercentage) / 100;
//         const winnings = jackpot.totalValue - commissionValue;
  
//         // Trade the items to the winner
//         // (Implement trade logic here using the Steam API)
//         await transferWinningsToWinner(winner, jackpot.items, winnings);
  
//         // Mark the jackpot as completed
//         jackpot.status = 'completed';
//         jackpot.winner = winner._id;
//         await jackpot.save();
//       }
//     } catch (error) {
//       console.error('Error completing jackpot:', error);
//     }
//   };
  

//   module.exports = {
//     getJackpotStatus,
//     joinJackpot,
//     completeJackpot
//   }