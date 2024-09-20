// components/TimerBox.js

import { useState, useEffect } from 'react';

const TimerBox = ({ initialTime = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container mt-5">
      <div className="timer-box">
        {timeLeft} s
      </div>
      <style jsx>{`
        .timer-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timer-box {
          font-size: 3rem;
          background: linear-gradient(90deg, rgba(255, 87, 34, 1) 0%, rgba(255, 193, 7, 1) 100%);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          display: inline-block; /* Adjust as needed */
        }
      `}</style>
    </div>
  );
};

export default TimerBox;
