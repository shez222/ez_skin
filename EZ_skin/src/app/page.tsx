// pages/index.tsx or pages/homePage.tsx

"use client";

import back from "@/assets/images/home.jpg";
import Chat from "@/components/chat";
import JackpotStatus from "../components/jacpotStatusapifetch/page";
import JackpotHistory from "../components/JackpotHistory/jackpotHistory"; // Updated import
import img from "@/assets/images/icon.jpg";
import Image from "next/image";


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
        <div className="w-[90%] mt-8 mx-auto flex gap-3 overflow-x-auto">
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#D2655E] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#C455D2] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#D2655E] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#586AD1] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#586AD1] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#D2655E] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#C455D2] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#C455D2] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#D2655E] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
            <div className="relative flex items-center justify-center min-w-[150px] w-[150px] border-b-[#D2655E] border-b-4 border-[1px] border-[#9b9ba1] h-[100px] bg-[#2C2C2E]">
              <Image
                alt="photo"
                src={img}
                width={20}
                height={20}
                className="rounded-full absolute right-1 top-1"
              />
              <div className="text-[#EEC475] text-[11px] absolute left-1 top-1">
                28.56
              </div>
              <img
                src="https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835ZW5mLAfCk4nReh8DEiv5dbOao7pLc1R_i37hWf1r4/62fx62f"
                alt=""
              />
              <p className="text-white text-[10px] absolute bottom-0 text-center">
                AK-47 | Vulcam (field-tested)
              </p>
            </div>
          </div>
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
