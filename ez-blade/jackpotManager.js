// jackpotManager.js

const Jackpot = require('./models/jackpotSchema');
const io = require('./socket');

let roundDuration = 12; // in seconds
let roundStartTime = null;
let timerInterval = null;

function getTimeLeft() {
  if (!roundStartTime) return roundDuration;
  const elapsed = Math.floor((Date.now() - roundStartTime) / 1000);
  return Math.max(roundDuration - elapsed, 0);
}

function startRoundTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  roundStartTime = Date.now();

  io.getIO().emit('timer', { timeLeft: roundDuration });

  timerInterval = setInterval(async () => {
    const timeLeft = getTimeLeft();
    io.getIO().emit('timer', { timeLeft });

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      roundStartTime = null;
      timerInterval = null;
      // End the round
      await endRound();
    }
  }, 1000);
}

async function endRound() {
  try {
    // Get the current jackpot
    let jackpot = await Jackpot.findOne({ status: 'in_progress' })
      .populate('participants.user')
      .populate('participants.items');

    if (!jackpot) {
      console.log('No active jackpot to end.');
      return;
    }

    // Generate wheel items based on participants' contributions
    const wheelItems = generateWheelItems(jackpot.participants);

    // Randomly select the winner based on the wheel items
    const winnerIndex = Math.floor(Math.random() * wheelItems.length);
    const winnerParticipant = wheelItems[winnerIndex];

    // Update jackpot with winner
    jackpot.status = 'completed';
    jackpot.winner = winnerParticipant.user._id;
    await jackpot.save();

    // Emit the round result to all clients
    io.getIO().emit('roundResult', {
      winnerIndex,
      winnerParticipant,
    });

    // Start a new jackpot
    const newJackpot = new Jackpot({ status: 'waiting', totalValue: 0, participants: [] });
    await newJackpot.save();
  } catch (error) {
    console.error('Error ending round:', error);
  }
}

function generateWheelItems(participants) {
  let totalValue = participants.reduce((acc, p) => {
    const participantValue = p.items.reduce((itemAcc, item) => {
      return itemAcc + parseFloat(item.price);
    }, 0);
    return acc + participantValue;
  }, 0);

  let wheelItems = participants.flatMap((participant) => {
    const participantValue = participant.items.reduce((itemAcc, item) => {
      return itemAcc + parseFloat(item.price);
    }, 0);
    const scaledSlots = Math.round((participantValue / totalValue) * 100);
    return Array(scaledSlots).fill(participant);
  });

  // Shuffle the wheel items
  wheelItems = shuffleArray(wheelItems);

  return wheelItems;
}

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // Swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

module.exports = {
  startRoundTimer,
  getTimeLeft,
  endRound,
};
