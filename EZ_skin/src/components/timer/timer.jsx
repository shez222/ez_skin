// components/TimerBox.js

import { useState, useEffect } from "react";
import openSocket from "socket.io-client";

const TimerBox = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const SOCKET_SERVER_URL =
    process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:5000";

  useEffect(() => {
    const socket = openSocket(`${SOCKET_SERVER_URL}`);

    // Listen for timer updates from the server
    socket.on("timer", (data) => {
      setTimeLeft(data.timeLeft);
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="timer-container mt-5 ml-8">
      <div className="timer-box">{timeLeft}</div>
      <style jsx>{`
        .timer-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timer-box {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            rgba(255, 87, 34, 1) 0%,
            rgba(255, 193, 7, 1) 100%
          );
          padding: 20px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default TimerBox;
