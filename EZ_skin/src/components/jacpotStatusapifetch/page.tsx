// pages/JackpotStatus.js

"use client";

import { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';
import axios from "axios";
import Image from "next/image";
import HorizontalWheel from "../wheel/index";
import TimerBox from "../timer/timer";

export default function JackpotStatus() {
  const [participants, setParticipants] = useState([]);
  const [showWheel, setShowWheel] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [winningParticipant, setWinningParticipant] = useState(null);

  // Helper function to extract numeric value from a price string (e.g., "12.34 USD" -> 12.34)
  const extractPrice = (priceString) => {
    const match = priceString.match(/([\d,.]+)/);
    if (match) {
      return parseFloat(match[1].replace(/,/g, ''));
    }
    return 0;
  };

  useEffect(() => {
    const socket = openSocket('http://localhost:5000');

    // Fetch initial jackpot data
    const fetchJackpotData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jackpotSystem/status');
        const participantsData = response.data.participants;

        const initialParticipants = participantsData.map((participant) => {
          const user = participant.user;
          const totalValue = participant.items.reduce((acc, item) => {
            const price = extractPrice(item.price);
            return acc + price;
          }, 0);

          return {
            username: user.username || "Unknown",
            totalValue: totalValue,
            skinCount: participant.items.length,
            img: user.avatar.small || "/default-avatar.png",
          };
        });

        setParticipants(initialParticipants);
      } catch (error) {
        console.error('Error fetching jackpot data:', error.response ? error.response.data : error.message);
      }
    };

    fetchJackpotData();

    // Listen for participants update
    socket.on('participants', (data) => {
      const updatedParticipants = data.participants.map((participant) => {
        const user = participant.user;
        const totalValue = participant.items.reduce((acc, item) => {
          const price = extractPrice(item.price);
          return acc + price;
        }, 0);

        return {
          username: user.username || "Unknown",
          totalValue: totalValue,
          skinCount: participant.items.length,
          img: user.avatar.small || "/default-avatar.png",
        };
      });
      setParticipants(updatedParticipants);
    });

    // Listen for timer updates
    socket.on('timer', (data) => {
      // Timer updates are handled inside the TimerBox component
      // You can add any additional logic here if needed
    });

    // Listen for round result
    socket.on('roundResult', (data) => {
      setWinnerIndex(data.winnerIndex);
      setWinningParticipant(data.winnerParticipant);
      setShowWheel(true);
    });

    // Cleanup the socket connection when the component is unmounted
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  // Calculate the total value of the jackpot and the total number of skins
  const totalJackpotValue = participants.reduce((acc, participant) => acc + participant.totalValue, 0);
  const totalSkins = participants.reduce((acc, participant) => acc + participant.skinCount, 0);

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
              <p className="text-lg md:text-xl font-bold text-white">
                Total Skins:
              </p>
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
      {showWheel && (
        <div className="w-full mt-10 text-center">
          <h2 className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
            The Jackpot Wheel
          </h2>
          <div className="w-full mt-5">
            <HorizontalWheel
              participants={participants}
              winnerIndex={winnerIndex}
              winningParticipant={winningParticipant}
            />
          </div>
        </div>
      )}

      {/* Display participants */}
      <div className="w-full">
        <div className="w-[95%] flex flex-wrap justify-center md:justify-start gap-2 mt-7 mx-auto">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="w-[250px] border-[1px] border-black py-1 px-2 bg-black"
              style={{
                backgroundColor: "#222",
                borderRight: `20px solid #444`,
              }}
            >
              <div className="flex items-center gap-1">
                <Image
                  width={30}
                  height={30}
                  className="rounded-full"
                  src={participant.img}
                  alt={participant.username}
                />
                <div className="flex flex-col justify-center">
                  <div className="flex">
                    <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                      {participant.skinCount}
                    </div>
                    <p className="text-[#9b9ba1] ml-1 text-[12px]">
                      <span className="font-semibold text-white">{participant.username}</span>
                    </p>
                  </div>
                  <p className="text-[12px] text-white">
                    {participant.skinCount} Skins @ ${participant.totalValue.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
          Round hash: (Your round hash here)
        </p>
      </div>
    </>
  );
}
