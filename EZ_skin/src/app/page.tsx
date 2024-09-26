// pages/index.tsx or pages/homePage.tsx

"use client";

import back from "@/assets/images/home.jpg";
import Chat from "@/components/chat";
import JackpotStatus from "../components/jacpotStatusapifetch/page";
import JackpotHistory from "../components/JackpotHistory/jackpotHistory"; // Updated import

export default function HomePage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full h-[95vh] overflow-y-hidden flex"
      >
        {/* Sidebar */}
        <div className="h-[95vh] pt-2 !hidden md:!flex border-r-[1px] border-black items-center flex-col bg-[#2C2C2E] w-10">
          <svg
            width="25px"
            height="25px"
            className="cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#5B595C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#5B595C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#5B595C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Chat Component */}
        <Chat />

        {/* Main Content */}
        <div className="w-full overflow-y-auto h-[95vh] md:h-[90vh] md:w-[80%]">
          {/* Jackpot Status */}
          <JackpotStatus />

          {/* Jackpot History */}
          <JackpotHistory />

          {/* Remove or comment out the GameResult component if it's no longer needed */}
          {/*
          <GameResult
            ticketPercent={84.264455}
            secret="fed2d2di893nf052d58v1v"
            winner="john smith ezskin.com"
            potValue={79.29}
            chance={37.28}
            players={players}
            roundHash="cc13cf2g79d-0-dd70f7d690ggd5564651dou1"
            img="/path-to-image.jpg"  // Update the image path accordingly
          />
          */}
        </div>
      </div>
    </>
  );
}
