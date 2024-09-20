"use client";

import back from "@/assets/images/home.jpg";
import img from "@/assets/images/icon.jpg";
import Chat from "@/components/chat";
import HorizontalWheel from "@/components/wheel";
import Image from "next/image";
import openSocket from 'socket.io-client';
import axios from "axios";
import { useEffect, useState } from 'react';
import Timer from '../timer/timer';

export default function JackpotStatus() {
  const [items, setItems] = useState([]); // Initialize state for items
  const [showTimer, setShowTimer] = useState(false); // Control timer visibility
  const [showWheel, setShowWheel] = useState(false); // Control wheel visibility

  // Helper function to extract numeric value from a price string (e.g., "1 USD" -> 1)
  const extractPrice = (priceString: string) => {
    const match = priceString.match(/([\d,.]+)/); // Extract numbers, including commas and decimals
    if (match) {
      return parseFloat(match[1].replace(/,/g, '')); // Remove commas and convert to float
    }
    return 0; // Default to 0 if the price is not in the expected format
  };

  // Handle what happens when time is up
  const handleTimeUp = () => {
    setShowWheel(true); // Show the wheel when the timer runs out
  };

  useEffect(() => {
    const fetchJackpotData = async () => {
      try {
        // Fetch jackpot data on page load
        const response = await axios.get('http://localhost:5000/jackpotSystem/status');
        const participants = response.data.participants; // Access participants array

        // Map participants to the items array structure
        const initialItems = participants.map((participant: any, index: any) => {
          const user = participant.user; // Extract user
          const itemsCount = participant.items.length; // Get the number of items
          const totalValue = participant.items.reduce((acc: any, item: any) => {
            const price = extractPrice(item.price); // Use the helper to extract the numeric price
            return acc + price;
          }, 0); // Calculate total price

          return {
            id: index + 1, // Assuming index for ID
            username: user.username || "Unknown", // Use user.username or default to "Unknown"
            skinCount: itemsCount, // Number of items (skins)
            price: totalValue, // Total price of items
            score: 40, // Default or computed score (you can adjust this)
            img: user.avatar.small || "path-to-image", // Use user's image if available
          };
        });

        // Update state with the initial fetched items
        setItems(initialItems);

        // Check if participants length is >= 2 to show the timer
        if (participants.length >= 2) {
          setShowTimer(true); // Show the timer if participants are 2 or more
        } else {
          setShowTimer(false); // Hide the timer if participants are less than 2
        }
      } catch (error: any) {
        console.error('Error fetching jackpot data:', error.response ? error.response.data : error.message);
      }
    };

    const socket = openSocket('http://localhost:5000');

    // Fetch initial jackpot data on component mount
    fetchJackpotData();

    // Listen for real-time updates via WebSocket
    socket.on('jackpots', async (data) => {
      if (data.action === 'update') {
        // Fetch updated jackpot data
        const response = await axios.get('http://localhost:5000/jackpotSystem/status');
        const participants = response.data.participants; // Access participants array

        // Map participants to the items array structure
        const updatedItems = participants.map((participant: any, index: any) => {
          const user = participant.user; // Extract user
          const itemsCount = participant.items.length; // Get the number of items
          const totalValue = participant.items.reduce((acc: any, item: any) => {
            const price = extractPrice(item.price); // Use the helper to extract the numeric price
            return acc + price;
          }, 0); // Calculate total price

          return {
            id: index + 1, // Assuming index for ID
            username: user.username || "Unknown", // Use user.username or default to "Unknown"
            skinCount: itemsCount, // Number of items (skins)
            price: totalValue, // Total price of items
            score: 40, // Default or computed score (you can adjust this)
            img: user.avatar.small || "path-to-image", // Use user's image if available
          };
        });

        // Update state with the new items
        setItems(updatedItems);

        // Check if participants length is >= 2 to show the timer
        if (participants.length >= 2) {
          setShowTimer(true); // Show the timer if participants are 2 or more
        } else {
          setShowTimer(false); // Hide the timer if participants are less than 2
        }
      }
    });

    // Cleanup the socket connection when the component is unmounted
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };

  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <>
      {/* Jackpot Main Heading */}
      <div className="w-full text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-green-400
">
          Current Jackpot
        </h1>
      </div>
  
      {/* Show the heading and HorizontalWheel only when time is up */}
      {showWheel && (
        <div className="w-full mt-10 text-center">
          <h2 className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
            The Jackpot Wheel
          </h2>
          <div className="w-full mt-5">
            <HorizontalWheel />
          </div>
        </div>
      )}
  
      {/* Show the timer only if participants length is 2 or more */}
      {showTimer && (
        <Timer initialTime={5} onTimeUp={handleTimeUp} />
      )}
  
      <div className="w-full">
        <div className="w-[95%] flex flex-wrap justify-center md:justify-start gap-2 mt-7 mx-auto">
          {items.map((item: any) => (
            <div
              key={item.id}
              className={`w-[250px] border-[1px] border-black py-1 px-2 bg-black`}
              style={{
                backgroundColor: item.backgroundColor,
                borderRight: `20px solid ${item.borderColor}`,
              }}
            >
              <div className="flex items-center gap-1">
                <Image
                  width={30}
                  height={30}
                  className="rounded-full"
                  src={item.img}
                  alt={item.username}
                />
                <div className="flex flex-col justify-center">
                  <div className="flex">
                    <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                      {item.score}
                    </div>
                    <p className="text-[#9b9ba1] ml-1 text-[12px]">
                      <span className="font-semibold text-white">{item.username}</span>
                    </p>
                  </div>
                  <p className="text-[12px] text-white">
                    {item.skinCount} Skins @ {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
          Round hash (69928): cc13cf2g79d-0-dd70f7d690ggd5564651dou1{" "}
        </p>
      </div>
    </>
  );
  
}
