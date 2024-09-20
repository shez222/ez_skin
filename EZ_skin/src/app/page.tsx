"use client";

import back from "@/assets/images/home.jpg";
import img from "@/assets/images/icon.jpg";
import Chat from "@/components/chat";
import Image from "next/image";

import JackpotStatus from "../components/jacpotStatusapifetch/page";

export default function HomePage() {
  
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full  h-[95vh] overflow-y-hidden  flex "
      >
        <div className="h-[95vh] pt-2 !hidden md:!flex border-r-[1px] border-black  items-center flex-col bg-[#2C2C2E] w-10">
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
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#5B595C"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#5B595C"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <Chat />

        <div className="w-full overflow-y-auto h-[95vh] md:h-[90vh]  md:w-[80%]">
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
          <JackpotStatus />
          <div className="border-t-2 mt-10 border-gray-900">
            <div className="bg-[#FFC839] relative flex justify-center items-center w-full h-20 mt-7">
              <div className="flex absolute -top-4 w-full justify-between">
                <div className="bg-black rounded-md text-[10px] md:text-xs text-white px-2">
                  Ticket (%): <span className="text-[#FFC839]"> 84.264455</span>
                </div>
                <div className="bg-black rounded-md  text-[10px] md:text-xs  text-white px-2">
                  Secret:{" "}
                  <span className="text-[#FFC839]">fed2d2di893nf052d58v1v</span>
                </div>
              </div>
              <div className="bg-[#392A08] text-sm md:text-base text-white px-5 rounded-lg ">
                dot <span className="text-[#FFC839]"> | </span> john smith
                ezskin.com won the pot valued at{" "}
                <span className="text-[#FFC839]"> 79.29</span> with the chance
                of 37.28%
              </div>
            </div>
            <div className="w-full">
              <div className="w-[95%] flex justify-center md:justify-start flex-wrap gap-2 mt-7 mx-auto">
                <div className="w-[250px] border-[1px] border-black bg-[#4C3B3B] border-r-[20px]  py-1 px-2 border-r-[#F15C49]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#334046] border-r-[20px]  py-1 px-2 border-r-[#29A2D3]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#473B42] border-r-[20px]  py-1 px-2 border-r-[#FE9AC4]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#383D39] border-r-[20px]  py-1 px-2 border-r-[#349635]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#4B423B] border-r-[20px]  py-1 px-2 border-r-[#F3BA2A]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
                Round hash (69928): cc13cf2g79d-0-dd70f7d690ggd5564651dou1{" "}
              </p>
            </div>
          </div>
          <div className="border-t-2 mt-10 border-gray-900">
            <div className="bg-[#FFC839] relative flex justify-center items-center w-full h-20 mt-7">
              <div className="flex absolute -top-4 w-full justify-between">
                <div className="bg-black rounded-md text-[10px] md:text-xs text-white px-2">
                  Ticket (%): <span className="text-[#FFC839]"> 84.264455</span>
                </div>
                <div className="bg-black rounded-md  text-[10px] md:text-xs  text-white px-2">
                  Secret:{" "}
                  <span className="text-[#FFC839]">fed2d2di893nf052d58v1v</span>
                </div>
              </div>
              <div className="bg-[#392A08] text-sm md:text-base text-white px-5 rounded-lg ">
                dot <span className="text-[#FFC839]"> | </span> john smith
                ezskin.com won the pot valued at{" "}
                <span className="text-[#FFC839]"> 79.29</span> with the chance
                of 37.28%
              </div>
            </div>
            <div className="w-full">
              <div className="w-[95%] flex justify-center md:justify-start flex-wrap gap-2 mt-7 mx-auto">
                <div className="w-[250px] border-[1px] border-black bg-[#4C3B3B] border-r-[20px]  py-1 px-2 border-r-[#F15C49]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#334046] border-r-[20px]  py-1 px-2 border-r-[#29A2D3]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#473B42] border-r-[20px]  py-1 px-2 border-r-[#FE9AC4]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#383D39] border-r-[20px]  py-1 px-2 border-r-[#349635]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] border-[1px] border-black bg-[#4B423B] border-r-[20px]  py-1 px-2 border-r-[#F3BA2A]">
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      className="rounded-full"
                      height={30}
                      src={img}
                      alt="cvd"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex ">
                        <div className="h-5 px-1 rounded-sm flex items-center justify-center bg-[#FFC839] text-[8px]">
                          40
                        </div>
                        <p className="text-[#9b9ba1] ml-1 text-[12px]">
                          <span className="font-semibold text-white">
                            John Smith{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <p className="text-[12px] text-white">6 Skins @ 29.30</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-[10px] md:text-sm text-center mt-10">
                Round hash (69928): cc13cf2g79d-0-dd70f7d690ggd5564651dou1{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
