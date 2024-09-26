// components/HorizontalWheel.tsx

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

// ----------------------
// Type Definitions
// ----------------------

// Interface for a participant
interface Participant {
  username: string;
  totalValue: number;
  skinCount: number;
  img: string;
}

// Interface for the component props
interface HorizontalWheelProps {
  participants: Participant[];
  winnerIndex: number | null;
  winningParticipant: Participant | null;
}

// Interface for WheelItem's props
interface WheelItemProps {
  bgColor: string;
}

// ----------------------
// Styled Components
// ----------------------

// Container for the entire wheel
const WheelContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

// Wheel styled with framer-motion for animations
const Wheel = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

// Arrow/Marker styled component
const Arrow = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 30px solid red;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.2);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }
`;

// Individual wheel item styled component
const WheelItem = styled.div<WheelItemProps>`
  width: 150px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  margin: 0 5px;
  border: 2px solid ${({ bgColor }) => bgColor};
`;

// Content inside each wheel item
const WheelItemContent = styled.div`
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled image for the user's avatar
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; /* Circular image */
  margin-bottom: 5px;
  object-fit: cover;
`;

// ----------------------
// HorizontalWheel Component
// ----------------------

const HorizontalWheel: React.FC<HorizontalWheelProps> = ({
  participants,
  winnerIndex,
  winningParticipant,
}) => {
  const controls = useAnimation();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  // Constants
  const SLOT_WIDTH = 160; // Adjusted if needed
  const SPIN_DURATION = 5; // Duration in seconds
  const NUM_SPINS = 3; // Number of spins
  console.log(winningParticipant);

  // Calculate total value
  const totalValue = participants.reduce((acc, p) => acc + p.totalValue, 0);

  // Generate wheel items based on participant contributions
  console.log(participants);
  console.log("win", winningParticipant);

  let wheelItems = participants.flatMap((participant) => {
    const scaledSlots = Math.round((participant.totalValue / totalValue) * 100);
    return Array(scaledSlots).fill(participant);
  });

  // Ensure wheelItems has at least one item
  if (wheelItems.length === 0) {
    wheelItems = participants;
  }

  // Duplicate wheel items to create a seamless loop
  const repeatedWheelItems = Array(NUM_SPINS * 2)
    .fill(wheelItems)
    .flat();

  // Total wheel length
  const totalWheelLength = repeatedWheelItems.length * SLOT_WIDTH;

  useEffect(() => {
    if (winnerIndex !== null && !isSpinning) {
      spinWheel(winnerIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winnerIndex]);

  const spinWheel = (winnerIdx: number) => {
    setIsSpinning(true);

    // Adjusted Winner Index based on the number of spins
    const adjustedWinnerIndex =
      winnerIdx + wheelItems.length * (NUM_SPINS * 2 - 1);

    const spinDistance = adjustedWinnerIndex * SLOT_WIDTH;

    console.log("Adjusted Winner Index:", adjustedWinnerIndex);
    console.log("Spin Distance:", spinDistance);

    controls
      .start({
        x: -spinDistance,
        transition: {
          duration: SPIN_DURATION,
          ease: [0.22, 1, 0.36, 1],
        },
      })
      .then(() => {
        setIsSpinning(false);
      });
  };

  // Function to get background color based on index
  const getBG = (index: number): string => {
    const colors = ["#F15C49", "#29A2D3", "#FE9AC4", "#349635", "#F3BA2A"];
    return colors[index % colors.length];
  };

  return (
    <div className="relative">
      {/* Arrow/Marker */}
      <Arrow />

      <WheelContainer>
        <Wheel animate={controls}>
          {repeatedWheelItems.map((participant, index) => (
            <WheelItem key={index} bgColor={getBG(index)}>
              <WheelItemContent>
                <UserImage
                  src={participant.img || "/default-avatar.png"}
                  alt={participant.username}
                />
                {participant.username} <br />
                (${participant.totalValue.toFixed(2)}) <br />
                Chance:{" "}
                {((participant.totalValue / totalValue) * 100).toFixed(2)}%
              </WheelItemContent>
            </WheelItem>
          ))}
        </Wheel>
      </WheelContainer>

      {/* Announce the winner */}
      {winningParticipant && !isSpinning && (
        <div className="text-center mt-4">
          <h2>Winner: {winningParticipant.username}</h2>
        </div>
      )}
    </div>
  );
};

export default HorizontalWheel;

// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";
// import styled from "styled-components";

// // Styled components
// const WheelContainer = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
// `;

// const Wheel = styled(motion.div)`
//   display: flex;
//   flex-direction: row;
// `;

// const Arrow = styled.div`
//   position: absolute;
//   top: -20px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 10;
//   width: 0;
//   height: 0;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-bottom: 30px solid red;
//   animation: pulse 1.5s infinite;

//   @keyframes pulse {
//     0% {
//       transform: translateX(-50%) scale(1);
//     }
//     50% {
//       transform: translateX(-50%) scale(1.2);
//     }
//     100% {
//       transform: translateX(-50%) scale(1);
//     }
//   }
// `;

// const WheelItem = styled.div`
//   width: 150px;
//   height: 120px;
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ bgColor }) => bgColor};
//   border-radius: 8px;
//   margin: 0 5px;
//   border: 2px solid ${({ bgColor }) => bgColor};
// `;

// const WheelItemContent = styled.div`
//   color: white;
//   font-weight: bold;
//   font-size: 14px;
//   text-align: center;
//   font-family: "Arial", sans-serif;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const UserImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%; // Circular image
//   margin-bottom: 5px;
//   object-fit: cover;
// `;

// const HorizontalWheel = ({ participants, winnerIndex, winningParticipant }) => {
//   const controls = useAnimation();
//   const [isSpinning, setIsSpinning] = useState(false);

//   // Constants
//   const SLOT_WIDTH = 160; // Adjusted if needed
//   const SPIN_DURATION = 5;
//   const NUM_SPINS = 3;

//   // Calculate total value
//   const totalValue = participants.reduce((acc, p) => acc + p.totalValue, 0);

//   // Generate wheel items based on participant contributions
//   console.log(participants);
//   console.log("win",winningParticipant);

//   let wheelItems = participants.flatMap((participant) => {
//     const scaledSlots = Math.round((participant.totalValue / totalValue) * 100);
//     return Array(scaledSlots).fill(participant);
//   });

//   // Ensure wheelItems has at least one item
//   if (wheelItems.length === 0) {
//     wheelItems = participants;
//   }

//   // Duplicate wheel items to create a seamless loop
//   const repeatedWheelItems = Array(NUM_SPINS * 2)
//     .fill(wheelItems)
//     .flat();

//   // Total wheel length
//   const totalWheelLength = repeatedWheelItems.length * SLOT_WIDTH;

//   useEffect(() => {
//     if (winnerIndex !== null && !isSpinning) {
//       spinWheel(winnerIndex);
//     }
//   }, [winnerIndex]);

//   const spinWheel = (winnerIndex) => {
//     setIsSpinning(true);

//     const adjustedWinnerIndex =
//       winnerIndex + wheelItems.length * (NUM_SPINS * 2 - 1);

//     const spinDistance = adjustedWinnerIndex * SLOT_WIDTH;

//     console.log("Adjusted Winner Index:", adjustedWinnerIndex);
//     console.log("Spin Distance:", spinDistance);

//     controls
//       .start({
//         x: -spinDistance,
//         transition: {
//           duration: SPIN_DURATION,
//           ease: [0.22, 1, 0.36, 1],
//         },
//       })
//       .then(() => {
//         setIsSpinning(false);
//       });
//   };

//   const getBG = (index) => {
//     const colors = ["#F15C49", "#29A2D3", "#FE9AC4", "#349635", "#F3BA2A"];
//     return colors[index % colors.length];
//   };

//   return (
//     <div className="relative">
//       {/* Arrow/Marker */}
//       <Arrow />

//       <WheelContainer>
//         <Wheel animate={controls}>
//           {repeatedWheelItems.map((participant, index) => (
//             <WheelItem key={index} bgColor={getBG(index)}>
//               <WheelItemContent>
//                 <UserImage
//                   src={participant.img || "path/to/placeholder.jpg"}
//                   alt={participant.username}
//                 />
//                 {participant.username} <br />
//                 (${participant.totalValue.toFixed(2)}) <br />
//                 Chance:{" "}
//                 {((participant.totalValue / totalValue) * 100).toFixed(2)}%
//               </WheelItemContent>
//             </WheelItem>
//           ))}
//         </Wheel>
//       </WheelContainer>

//       {/* Announce the winner */}
//       {winningParticipant && !isSpinning && (
//         <div className="text-center mt-4">
//           <h2>Winner: {winningParticipant.user.username}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HorizontalWheel;
