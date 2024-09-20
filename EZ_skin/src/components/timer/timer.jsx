// components/TimerBox.js

import { useState, useEffect } from 'react';

const TimerBox = ({ initialTime = 120, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);
          if (onTimeUp) {
            onTimeUp(); // Call the onTimeUp function when timer hits 0
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUp]);

  return (
    <div className="timer-container mt-5 ml-8">
      <div className="timer-box">
        {timeLeft}
      </div>
      <style jsx>{`
        .timer-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timer-box {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(90deg, rgba(255, 87, 34, 1) 0%, rgba(255, 193, 7, 1) 100%);
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
