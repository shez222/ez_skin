// pages/JackpotStatus.tsx

"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import HorizontalWheel from "../wheel/index"; // Ensure correct path
import TimerBox from "../timer/timer"; // Ensure correct path
import Modal from "../ModalInventory"; // Import the Modal component

// Define environment variable for Socket.IO server URL
const SOCKET_SERVER_URL =
  process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:5000";

// ----------------------
// Type Definitions
// ----------------------

// Interface for an individual item
interface Item {
  _id: string;
  name: string;
  iconUrl: string;
  price: string; // e.g., "12.34 USD"
  tradable: boolean;
  owner: string;
  assetId: string;
  appId: number;
  contextId: number;
  createdAt: string; // ISO date string
  __v: number;
}

// Interface for a user
interface User {
  username?: string;
  avatar: {
    small: string;
    medium?: string;
    large?: string;
  };
  // Add other user fields if necessary
}

// Interface for participant data received from the server
interface ParticipantData {
  user: User;
  items: Item[];
}

// Interface for a participant in the frontend state
interface Participant {
  username: string;
  items: Item[]; // Array of invested items
  totalValue: number;
  skinCount: number;
  img: string;
}

// Interface for the round result received from the server
interface RoundResult {
  winnerIndex: number;
  winnerParticipant: Participant;
}

// Interface for the jackpot status response from the server
interface JackpotStatusResponse {
  participants: ParticipantData[];
}

// ----------------------
// JackpotStatus Component
// ----------------------

export default function JackpotStatus() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [showWheel, setShowWheel] = useState<boolean>(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [winningParticipant, setWinningParticipant] = useState<
    Participant | null
  >(null);
  const [spinStartTime, setSpinStartTime] = useState<number | null>(null); // New state for start time

  // Helper function to extract numeric value from a price string (e.g., "12.34 USD" -> 12.34)
  const extractPrice = (priceString: string): number => {
    const match = priceString.match(/([\d,.]+)/);
    if (match) {
      return parseFloat(match[1].replace(/,/g, ""));
    }
    return 0;
  };

  useEffect(() => {
    // Initialize Socket.IO client
    console.log(SOCKET_SERVER_URL);
    
    const socket: Socket = io(SOCKET_SERVER_URL);

    // Fetch initial jackpot data
    const fetchJackpotData = async () => {
      try {
        const response: AxiosResponse<JackpotStatusResponse> = await axios.get(
          `${SOCKET_SERVER_URL}/jackpotSystem/status`
        );
        const participantsData: ParticipantData[] = response.data.participants;

        const initialParticipants: Participant[] = participantsData.map(
          (participant) => {
            const user = participant.user;
            const totalValue = participant.items.reduce((acc, item) => {
              const price = extractPrice(item.price);
              return acc + price;
            }, 0);

            return {
              username: user.username || "Unknown",
              items: participant.items, // Include items
              totalValue: totalValue,
              skinCount: participant.items.length,
              img: user.avatar.small || "/default-avatar.png",
            };
          }
        );

        setParticipants(initialParticipants);
      } catch (error: any) {
        console.error(
          "Error fetching jackpot data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchJackpotData();

    // Listen for participants update
    socket.on("participants", (data: JackpotStatusResponse) => {
      const updatedParticipants: Participant[] = data.participants.map(
        (participant) => {
          const user = participant.user;
          const totalValue = participant.items.reduce((acc, item) => {
            const price = extractPrice(item.price);
            return acc + price;
          }, 0);

          return {
            username: user.username || "Unknown",
            items: participant.items, // Include items
            totalValue: totalValue,
            skinCount: participant.items.length,
            img: user.avatar.small || "/default-avatar.png",
          };
        }
      );
      setParticipants(updatedParticipants);
    });

    // Listen for timer updates
    socket.on("timer", (data: any) => {
      // Timer updates are handled inside the TimerBox component
      // You can add any additional logic here if needed
    });

    // Listen for round result
    socket.on("roundResult", (data: RoundResult) => {
      setWinnerIndex(data.winnerIndex);
      setWinningParticipant(data.winnerParticipant);
      // setSpinStartTime(data.startTime || null); // Set the start time if available
      setShowWheel(true);
    });

    // Cleanup the socket connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  // Calculate the total value of the jackpot and the total number of skins
  const totalJackpotValue: number = participants.reduce(
    (acc, participant) => acc + participant.totalValue,
    0
  );
  const totalSkins: number = participants.reduce(
    (acc, participant) => acc + participant.skinCount,
    0
  );

  return (
    <>
      {/* Jackpot Main Heading */}
      <div className="w-full text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-green-400">
          Current Jackpot
        </h1>
      </div>

      {/* Rectangle Box with Total Jackpot Value and Skins */}
      <div className="w-full flex justify-center mt-10 mb-11">
        <div className="relative w-[80%] max-w-[800px]">
          {/* Background Box */}
          <div className="absolute inset-0 bg-gray-800 rounded-md shadow-lg"></div>

          {/* Content Inside the Box */}
          <div className="relative z-10 flex justify-between items-center p-4">
            <div className="flex items-center">
              <p className="text-lg md:text-xl font-bold text-white">
                Total Jackpot Value:
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-green-400 ml-2">
                ${totalJackpotValue.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg md:text-xl font-bold text-white">Total Skins:</p>
              <p className="text-2xl md:text-3xl font-extrabold text-yellow-400 ml-2">
                {totalSkins}
              </p>
            </div>
          </div>

          {/* Timer Positioned Over the Box */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <TimerBox />
          </div>
        </div>
      </div>

      {/* Show the wheel when the round result is received */}
      {showWheel && winningParticipant && (
        <div className="w-full mt-10 text-center">
          <h2 className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
            The Jackpot Wheel
          </h2>
          <div className="w-full mt-5">
            <HorizontalWheel
              participants={participants}
              winnerIndex={winnerIndex}
              winningParticipant={winningParticipant}
              // startTime={spinStartTime} // Pass the start time
            />
          </div>
        </div>
      )}

      {/* Display participants */}
      <div className="w-full">
        <div className="w-[95%] flex flex-wrap justify-center md:justify-start gap-6 mt-7 mx-auto">
          {participants.map((participant) => (
            <ParticipantCard key={participant.username} participant={participant} />
          ))}
        </div>
        <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
          Round hash: (Your round hash here)
        </p>
      </div>
    </>
  );
}

// ----------------------
// ParticipantCard Component
// ----------------------

interface ParticipantCardProps {
  participant: Participant;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleClose = () => {
    setShowAll(false);
  };

  return (
    <>
    <div className="w-full max-w-sm bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="flex items-center p-4">
        <Image
          width={60}
          height={60}
          className="rounded-full border-2 border-gray-600"
          src={participant.img}
          alt={participant.username}
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-white">
            {participant.username}
          </h3>
          <p className="text-sm text-gray-300">
            {participant.skinCount} {participant.skinCount === 1 ? "Skin" : "Skins"} | ${participant.totalValue.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600" />

      {/* Invested Skins */}
      <div className="p-4">
        <p className="text-sm font-medium text-yellow-400 mb-2">
          Invested Skins:
        </p>
        <div className="grid grid-cols-2 gap-2">
          {participant.items.slice(0, 4).map((item) => (
            <ItemBadge key={item.assetId} item={item} />
          ))}
          {participant.items.length > 4 && (
            <div
              className="flex items-center justify-center col-span-2 p-2 bg-gray-600 rounded-md cursor-pointer hover:bg-gray-500 transition-colors duration-200"
              onClick={handleShowAll}
              title="View all skins"
            >
              <span className="text-xs text-gray-300">
                +{participant.items.length - 4} more
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Modal to show all skins */}
     
    </div>
     <Modal
     isOpen={showAll}
     onClose={handleClose}
     title={`${participant.username}'s Skins`}
   >
     <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 overflow-y-auto max-h-96">
       {participant.items.map((item) => (
         <ItemBadge key={item.assetId} item={item} />
       ))}
     </div>
   </Modal>
   </>
  );
};

// ----------------------
// ItemBadge Component
// ----------------------

interface ItemBadgeProps {
  item: Item;
}

const ItemBadge: React.FC<ItemBadgeProps> = ({ item }) => {
  return (
    <div
      className="flex items-center bg-gray-600 rounded-md p-1 hover:bg-gray-500 transition-colors duration-200"
      title={`${item.name} - ${item.price}`}
    >
      <Image
        src={item.iconUrl}
        alt={item.name}
        width={32}
        height={32}
        className="rounded-md"
        loading="lazy" // Enable lazy loading for better performance
      />
      <div className="ml-2 flex flex-col">
        <span className="text-xs text-white font-medium truncate w-24">
          {item.name}
        </span>
        <span className="text-xs text-gray-300">
          {item.price}
        </span>
      </div>
    </div>
  );
};









// "use client";

// import { useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client";
// import axios, { AxiosResponse } from "axios";
// import Image from "next/image";
// import HorizontalWheel from "../wheel/index";
// import TimerBox from "../timer/timer";

// // Define environment variable for Socket.IO server URL
// const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:5000";

// // ----------------------
// // Type Definitions
// // ----------------------

// // Interface for an individual item
// interface Item {
//   price: string; // e.g., "12.34 USD"
//   // Add other fields if necessary
// }

// // Interface for a user
// interface User {
//   username?: string;
//   avatar: {
//     small: string;
//     // Add other avatar sizes if available
//   };
//   // Add other user fields if necessary
// }

// // Interface for participant data received from the server
// interface ParticipantData {
//   user: User;
//   items: Item[];
// }

// // Interface for a participant in the frontend state
// interface Participant {
//   username: string;
//   totalValue: number;
//   skinCount: number;
//   img: string;
// }

// // Interface for the round result received from the server
// interface RoundResult {
//   winnerIndex: number;
//   winnerParticipant: Participant;
// }

// // Interface for the jackpot status response from the server
// interface JackpotStatusResponse {
//   participants: ParticipantData[];
// }

// // ----------------------
// // JackpotStatus Component
// // ----------------------

// export default function JackpotStatus() {
//   const [participants, setParticipants] = useState<Participant[]>([]);
//   const [showWheel, setShowWheel] = useState<boolean>(false);
//   const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
//   const [winningParticipant, setWinningParticipant] = useState<Participant | null>(null);

//   // Helper function to extract numeric value from a price string (e.g., "12.34 USD" -> 12.34)
//   const extractPrice = (priceString: string): number => {
//     const match = priceString.match(/([\d,.]+)/);
//     if (match) {
//       return parseFloat(match[1].replace(/,/g, ""));
//     }
//     return 0;
//   };

//   useEffect(() => {
//     // Initialize Socket.IO client
//     const socket: Socket = io(SOCKET_SERVER_URL);

//     // Fetch initial jackpot data
//     const fetchJackpotData = async () => {
//       try {
//         const response: AxiosResponse<JackpotStatusResponse> = await axios.get(
//           `${SOCKET_SERVER_URL}/jackpotSystem/status`
//         );
//         const participantsData: ParticipantData[] = response.data.participants;

//         const initialParticipants: Participant[] = participantsData.map((participant) => {
//           const user = participant.user;
//           const totalValue = participant.items.reduce((acc, item) => {
//             const price = extractPrice(item.price);
//             return acc + price;
//           }, 0);
//           console.log( participant.items);
          
//           return {
//             username: user.username || "Unknown",
//             items: participant.items,
//             totalValue: totalValue,
//             skinCount: participant.items.length,
//             img: user.avatar.small || "/default-avatar.png",
//           };
//         });

//         setParticipants(initialParticipants);
//       } catch (error: any) {
//         console.error(
//           "Error fetching jackpot data:",
//           error.response ? error.response.data : error.message
//         );
//       }
//     };

//     fetchJackpotData();

//     // Listen for participants update
//     socket.on("participants", (data: JackpotStatusResponse) => {
//       const updatedParticipants: Participant[] = data.participants.map((participant) => {
//         const user = participant.user;
//         const totalValue = participant.items.reduce((acc, item) => {
//           const price = extractPrice(item.price);
//           return acc + price;
//         }, 0);
//         console.log( participant.items);
        
//         return {
//           username: user.username || "Unknown",
//           items: participant.items,
//           totalValue: totalValue,
//           skinCount: participant.items.length,
//           img: user.avatar.small || "/default-avatar.png",
//         };
//       });
//       setParticipants(updatedParticipants);
//     });

//     // Listen for timer updates
//     socket.on("timer", (data: any) => {
//       // Timer updates are handled inside the TimerBox component
//       // You can add any additional logic here if needed
//     });

//     // Listen for round result
//     socket.on("roundResult", (data: RoundResult) => {
//       setWinnerIndex(data.winnerIndex);
//       setWinningParticipant(data.winnerParticipant);
//       setShowWheel(true);
//     });

//     // Cleanup the socket connection when the component is unmounted
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   // Calculate the total value of the jackpot and the total number of skins
//   const totalJackpotValue: number = participants.reduce(
//     (acc, participant) => acc + participant.totalValue,
//     0
//   );
//   const totalSkins: number = participants.reduce(
//     (acc, participant) => acc + participant.skinCount,
//     0
//   );

//   return (
//     <>
//       {/* Jackpot Main Heading */}
//       <div className="w-full text-center mt-10">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-green-400">
//           Current Jackpot
//         </h1>
//       </div>

//       {/* Rectangle Box with Total Jackpot Value and Skins */}
//       <div className="w-full flex justify-center mt-10 mb-11">
//         <div className="relative w-[80%] max-w-[800px]">
//           {/* Background Box */}
//           <div className="absolute inset-0 bg-gray-800 rounded-md shadow-lg"></div>

//           {/* Content Inside the Box */}
//           <div className="relative z-10 flex justify-between items-center p-4">
//             <div className="flex items-center">
//               <p className="text-lg md:text-xl font-bold text-white">
//                 Total Jackpot Value:
//               </p>
//               <p className="text-2xl md:text-3xl font-extrabold text-green-400 ml-2">
//                 ${totalJackpotValue.toFixed(2)}
//               </p>
//             </div>
//             <div className="flex items-center">
//               <p className="text-lg md:text-xl font-bold text-white">Total Skins:</p>
//               <p className="text-2xl md:text-3xl font-extrabold text-yellow-400 ml-2">
//                 {totalSkins}
//               </p>
//             </div>
//           </div>

//           {/* Timer Positioned Over the Box */}
//           <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
//             <TimerBox />
//           </div>
//         </div>
//       </div>

//       {/* Show the wheel when the round result is received */}
//       {showWheel && winningParticipant && (
//         <div className="w-full mt-10 text-center">
//           <h2 className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
//             The Jackpot Wheel
//           </h2>
//           <div className="w-full mt-5">
//             <HorizontalWheel
//               participants={participants}
//               winnerIndex={winnerIndex}
//               winningParticipant={winningParticipant}
//             />
//           </div>
//         </div>
//       )}

//       {/* Display participants */}
//       <div className="w-full">
//         <div className="w-[95%] flex flex-wrap justify-center md:justify-start gap-2 mt-7 mx-auto">
//           {participants.map((participant, index) => (
//             <div
//               key={index}
//               className="w-[250px] border-[1px] border-black py-1 px-2 bg-black"
//               style={{
//                 backgroundColor: "#222",
//                 borderRight: `20px solid #444`,
//               }}
//             >
//               <div className="flex items-center gap-1">
//                 <Image
//                   width={30}
//                   height={30}
//                   className="rounded-full"
//                   src={participant.img}
//                   alt={participant.username}
//                 />
//                 <div className="flex flex-col justify-center">
//                   <div className="flex">
//                     <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
//                       {participant.skinCount}
//                     </div>
//                     <p className="text-[#9b9ba1] ml-1 text-[12px]">
//                       <span className="font-semibold text-white">
//                         {participant.username}
//                       </span>
//                     </p>
//                   </div>
//                   <p className="text-[12px] text-white">
//                     {participant.skinCount} Skins @ ${participant.totalValue.toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
//           Round hash: (Your round hash here)
//         </p>
//       </div>
//     </>
//   );
// }

















// // pages/JackpotStatus.js

// "use client";

// import { useEffect, useState } from 'react';
// import openSocket from 'socket.io-client';
// import axios from "axios";
// import Image from "next/image";
// import HorizontalWheel from "../wheel/index";
// import TimerBox from "../timer/timer";

// export default function JackpotStatus() {
//   const [participants, setParticipants] = useState([]);
//   const [showWheel, setShowWheel] = useState(false);
//   const [winnerIndex, setWinnerIndex] = useState(null);
//   const [winningParticipant, setWinningParticipant] = useState(null);

//   // Helper function to extract numeric value from a price string (e.g., "12.34 USD" -> 12.34)
//   const extractPrice = (priceString) => {
//     const match = priceString.match(/([\d,.]+)/);
//     if (match) {
//       return parseFloat(match[1].replace(/,/g, ''));
//     }
//     return 0;
//   };

//   useEffect(() => {
//     const socket = openSocket('http://localhost:5000');

//     // Fetch initial jackpot data
//     const fetchJackpotData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/jackpotSystem/status');
//         const participantsData = response.data.participants;

//         const initialParticipants = participantsData.map((participant) => {
//           const user = participant.user;
//           const totalValue = participant.items.reduce((acc, item) => {
//             const price = extractPrice(item.price);
//             return acc + price;
//           }, 0);

//           return {
//             username: user.username || "Unknown",
//             totalValue: totalValue,
//             skinCount: participant.items.length,
//             img: user.avatar.small || "/default-avatar.png",
//           };
//         });

//         setParticipants(initialParticipants);
//       } catch (error) {
//         console.error('Error fetching jackpot data:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchJackpotData();

//     // Listen for participants update
//     socket.on('participants', (data) => {
//       const updatedParticipants = data.participants.map((participant) => {
//         const user = participant.user;
//         const totalValue = participant.items.reduce((acc, item) => {
//           const price = extractPrice(item.price);
//           return acc + price;
//         }, 0);

//         return {
//           username: user.username || "Unknown",
//           totalValue: totalValue,
//           skinCount: participant.items.length,
//           img: user.avatar.small || "/default-avatar.png",
//         };
//       });
//       setParticipants(updatedParticipants);
//     });

//     // Listen for timer updates
//     socket.on('timer', (data) => {
//       // Timer updates are handled inside the TimerBox component
//       // You can add any additional logic here if needed
//     });

//     // Listen for round result
//     socket.on('roundResult', (data) => {
//       setWinnerIndex(data.winnerIndex);
//       setWinningParticipant(data.winnerParticipant);
//       setShowWheel(true);
//     });

//     // Cleanup the socket connection when the component is unmounted
//     return () => {
//       if (socket) {
//         socket.disconnect();
//       }
//     };
//   }, []);

//   // Calculate the total value of the jackpot and the total number of skins
//   const totalJackpotValue = participants.reduce((acc, participant) => acc + participant.totalValue, 0);
//   const totalSkins = participants.reduce((acc, participant) => acc + participant.skinCount, 0);

//   return (
//     <>
//       {/* Jackpot Main Heading */}
//       <div className="w-full text-center mt-10">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-green-400">
//           Current Jackpot
//         </h1>
//       </div>

//       {/* Rectangle Box with Total Jackpot Value and Skins */}
//       <div className="w-full flex justify-center mt-10 mb-11">
//         <div className="relative w-[80%] max-w-[800px]">
//           {/* Background Box */}
//           <div className="absolute inset-0 bg-gray-800 rounded-md shadow-lg"></div>

//           {/* Content Inside the Box */}
//           <div className="relative z-10 flex justify-between items-center p-4">
//             <div className="flex items-center">
//               <p className="text-lg md:text-xl font-bold text-white">
//                 Total Jackpot Value:
//               </p>
//               <p className="text-2xl md:text-3xl font-extrabold text-green-400 ml-2">
//                 ${totalJackpotValue.toFixed(2)}
//               </p>
//             </div>
//             <div className="flex items-center">
//               <p className="text-lg md:text-xl font-bold text-white">
//                 Total Skins:
//               </p>
//               <p className="text-2xl md:text-3xl font-extrabold text-yellow-400 ml-2">
//                 {totalSkins}
//               </p>
//             </div>
//           </div>

//           {/* Timer Positioned Over the Box */}
//           <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
//             <TimerBox />
//           </div>
//         </div>
//       </div>

//       {/* Show the wheel when the round result is received */}
//       {showWheel && (
//         <div className="w-full mt-10 text-center">
//           <h2 className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
//             The Jackpot Wheel
//           </h2>
//           <div className="w-full mt-5">
//             <HorizontalWheel
//               participants={participants}
//               winnerIndex={winnerIndex}
//               winningParticipant={winningParticipant}
//             />
//           </div>
//         </div>
//       )}

//       {/* Display participants */}
//       <div className="w-full">
//         <div className="w-[95%] flex flex-wrap justify-center md:justify-start gap-2 mt-7 mx-auto">
//           {participants.map((participant, index) => (
//             <div
//               key={index}
//               className="w-[250px] border-[1px] border-black py-1 px-2 bg-black"
//               style={{
//                 backgroundColor: "#222",
//                 borderRight: `20px solid #444`,
//               }}
//             >
//               <div className="flex items-center gap-1">
//                 <Image
//                   width={30}
//                   height={30}
//                   className="rounded-full"
//                   src={participant.img}
//                   alt={participant.username}
//                 />
//                 <div className="flex flex-col justify-center">
//                   <div className="flex">
//                     <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
//                       {participant.skinCount}
//                     </div>
//                     <p className="text-[#9b9ba1] ml-1 text-[12px]">
//                       <span className="font-semibold text-white">{participant.username}</span>
//                     </p>
//                   </div>
//                   <p className="text-[12px] text-white">
//                     {participant.skinCount} Skins @ ${participant.totalValue.toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
//           Round hash: (Your round hash here)
//         </p>
//       </div>
//     </>
//   );
// }
