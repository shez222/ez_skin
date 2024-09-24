// // components/HorizontalWheel.js
// import audiom from "@/assets/audio/dice.mp3";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// const axios = require('axios');


// const WheelContainer = styled.div`
//   width: 100%;
//   overflow: hidden;
//   border: 2px solid #000;
//   position: relative;
// `;

// const Wheel = styled(motion.div)`
//   display: flex;
//   flex-direction: row;
//   width: 900px;
// `;

// interface MyDivProps {
//   bgColor: string;
//   quantity: number;
// }
// const WheelItem = styled.div<MyDivProps>`
//   min-width: ${({ quantity }) => quantity * 100}px;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   //   border: 1px solid black;
//   background-color: ${({ bgColor }) => bgColor || "#fff"};
// `;

// const HorizontalWheel = () => {
//   // const tick = new Audio(audio)
//   const [audio, setAudio] = useState<any>(null);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const newAudio = new Audio(audiom);
//       setAudio(newAudio);
//     }
//   }, []);
//   const [items, setItems] = useState([
//     { name: "Item 1", quantity: 4 },
//     { name: "Item 2", quantity: 2 },
//     { name: "Item 3", quantity: 3 },
//     { name: "Item 3", quantity: 1 },
//     { name: "Item 3", quantity: 5 },
//   ]);

//   const allItems = [...items, ...items, ...items, ...items, ...items];
//   const [spin, setSpin] = useState(false);
//   const controls = useAnimation();
//   const timerRef: any = useRef(null);

//   useEffect(() => {
//     timerRef.current = setTimeout(() => {
//       setSpin(true);
//     }, 2000);
//     return () => clearTimeout(timerRef.current);
//   });

//   let n = 50;
//   const array = Array.from({ length: n }, (v, i) => i + 1);

//   useEffect(() => {
//     if (spin) {
//       if (audio) {
//         audio.play();
//       }
//       controls
//         .start({
//           x: "-500%",
//           transition: { duration: 5, ease: "easeInOut" },
//         })
//         .then(() => {
//           setSpin(false);
//           setTimeout(() => {
//             controls.set({ x: 0 });
//           }, 2000);
//         });
//     }
//   }, [spin, controls]);
//   const getBG = (i: number) => {
//     switch (i) {
//       case 1:
//         return "#F15C49";
//       case 2:
//         return "#29A2D3";
//       case 3:
//         return "#FE9AC4";
//       case 4:
//         return "#349635";
//       default:
//         return "#F3BA2A";
//     }
//   };

//   return (
//     <div className="relative">
//       {/* <div className="w-full px-4 -top-3 z-[2] text-white  absolute flex justify-between">
//         <div className="bg-black px-4 rounded-lg flex gap-2 ">
//           <svg
//             version="1.1"
//             className="w-5"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 0 512 512"
//             xmlSpace="preserve"
//           >
//             <polyline
//               style={{ fill: "#FDBB00" }}
//               points="401.059,438.98 401.059,22.961 169.744,22.961 169.744,438.98 "
//             />
//             <polyline
//               style={{ fill: "#EDAB06" }}
//               points="216.459,438.98 216.459,22.961 169.744,22.961 169.744,438.98 "
//             />
//             <polyline
//               style={{ fill: "#F9CF67" }}
//               points="368.26,438.98 368.26,22.961 336.719,22.961 336.719,438.98 "
//             />
//             <g>
//               <rect
//                 x="169.743"
//                 y="69.851"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="121.291"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="172.735"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="224.179"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="275.624"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="327.056"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="378.501"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 x="169.743"
//                 y="429.945"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//             </g>
//             <rect
//               y="215.433"
//               style={{ fill: "#FDBB00" }}
//               width="231.315"
//               height="249.614"
//             />
//             <rect
//               y="215.433"
//               style={{ fill: "#EDAB06" }}
//               width="49.591"
//               height="249.614"
//             />
//             <rect
//               x="160.076"
//               y="215.433"
//               style={{ fill: "#F9CF67" }}
//               width="34.525"
//               height="249.614"
//             />
//             <g>
//               <rect
//                 y="254.447"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 y="305.88"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 y="357.324"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//               <rect
//                 y="408.769"
//                 style={{ fill: "#EDAB06" }}
//                 width="231.315"
//                 height="17.263"
//               />
//             </g>
//             <path
//               style={{ fill: "#FDBB00" }}
//               d="M505.089,366.481c0,63.874-51.789,115.652-115.663,115.652c-14.812,0-28.968-2.785-41.984-7.86
// 	c-43.112-16.803-73.668-58.729-73.668-107.791c0-63.885,51.778-115.663,115.652-115.663c14.754,0,28.853,2.762,41.823,7.803
// 	C474.453,275.377,505.089,317.35,505.089,366.481z"
//             />
//             <path
//               style={{ fill: "#F9CF67" }}
//               d="M505.089,366.481c0,63.874-51.789,115.652-115.663,115.652c-14.812,0-28.968-2.785-41.984-7.86
// 	l83.807-215.651C474.453,275.377,505.089,317.35,505.089,366.481z"
//             />
//             <g>
//               <path
//                 style={{ fill: "#EDAB06" }}
//                 d="M389.437,489.039c-67.582,0-122.563-54.981-122.563-122.563s54.981-122.563,122.563-122.563
// 		S512,298.894,512,366.476S457.018,489.039,389.437,489.039z M389.437,257.724c-59.965,0-108.752,48.786-108.752,108.752
// 		s48.787,108.752,108.752,108.752s108.752-48.786,108.752-108.752S449.403,257.724,389.437,257.724z"
//               />
//               <circle
//                 style={{ fill: "#EDAB06" }}
//                 cx="389.434"
//                 cy="366.474"
//                 r="71.389"
//               />
//             </g>
//           </svg>
//           132.85
//         </div>
//         <div className="bg-black px-4 rounded-lg flex gap-2 ">
//           <svg
//             className="w-5"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 0 512.461 512.461"
//             xmlSpace="preserve"
//           >
//             <g transform="translate(1 1)">
//               <path
//                 style={{ fill: "#FD9808" }}
//                 d="M40.421,208.297c23.893,0,40.107,25.6,29.013,46.933l-56.32,114.347
// 		c-8.533,18.773-5.973,40.96,8.533,58.027c10.24,12.8,26.453,19.627,43.52,19.627h96.427c26.453,0,40.96-31.573,23.04-51.2
// 		l-11.093-12.8c-2.56-3.413-4.267-8.533-3.413-12.8l51.2-162.133H40.421z"
//               />
//               <g>
//                 <path
//                   style={{ fill: "#FFDD09" }}
//                   d="M48.955,208.297c23.893,0,40.107,25.6,29.013,46.933l-56.32,114.347
// 			c-8.533,18.773-5.973,40.96,8.533,58.027c10.24,12.8,26.453,19.627,43.52,19.627h70.827c26.453,0,40.96-31.573,23.04-51.2
// 			l-11.093-12.8c-2.56-3.413-4.267-8.533-3.413-12.8l51.2-162.133H48.955z"
//                 />
//                 <path
//                   style={{ fill: "#FFDD09" }}
//                   d="M33.595,88.831v25.6l8.533,12.8c8.533,12.8,8.533,29.867,0,42.667l-8.533,12.8v25.6h332.8v-17.067
// 			c0-13.653,10.24-25.6,23.04-25.6h87.893v-76.8H33.595z"
//                 />
//               </g>
//               <path
//                 style={{ fill: "#FFFFFF" }}
//                 d="M42.128,169.897c8.533-12.8,8.533-29.867,0-42.667l-8.533-12.8v-25.6h-25.6v25.6l9.387,12.8
// 		c9.387,12.8,9.387,29.867,0,42.667l-9.387,12.8v25.6h25.6v-25.6L42.128,169.897z"
//               />
//               <polygon
//                 style={{ fill: "#FD9808" }}
//                 points="477.328,165.631 502.928,165.631 502.928,88.831 477.328,88.831 	"
//               />
//               <g>
//                 <polygon
//                   style={{ fill: "#FCC309" }}
//                   points="426.128,88.831 477.328,88.831 477.328,63.231 426.128,63.231 		"
//                 />
//                 <polygon
//                   style={{ fill: "#FCC309" }}
//                   points="59.195,88.831 110.395,88.831 110.395,63.231 59.195,63.231 		"
//                 />
//               </g>
//               <path
//                 style={{ fill: "#FD9808" }}
//                 d="M477.328,199.764H366.395v-8.533c0-13.653,11.093-25.6,25.6-25.6h85.333V199.764z"
//               />
//               <path
//                 style={{ fill: "#FCC309" }}
//                 d="M451.728,199.764h-85.333v-8.533c0-13.653,11.093-25.6,25.6-25.6h59.733V199.764z"
//               />
//               <g>
//                 <path
//                   style={{ fill: "#FFDD09" }}
//                   d="M274.235,265.471c-0.853,0-1.707,0-2.56-0.853c-27.307-9.387-37.547-18.773-45.227-40.96
// 			c-1.707-4.267,0.853-9.387,5.12-11.093c4.267-1.707,9.387,0.853,11.093,5.12c4.267,14.507,9.387,21.333,34.133,29.867
// 			c4.267,1.707,6.827,5.973,5.12,11.093C281.061,262.911,277.648,265.471,274.235,265.471z"
//                 />
//                 <path
//                   style={{ fill: "#FFDD09" }}
//                   d="M256.315,302.164h-61.44c-2.56,0-5.12-1.707-6.827-3.413c-1.707-1.707-1.707-5.12-0.853-7.68
// 			l27.307-85.333c0.853-3.413,4.267-5.973,8.533-5.973h95.573c5.12,0,8.533,3.413,8.533,8.533v24.747
// 			C325.435,271.444,293.861,302.164,256.315,302.164z M205.968,285.097h49.493c29.013,0,52.053-23.04,52.053-52.053v-16.213h-80.213
// 			L205.968,285.097z"
//                 />
//               </g>
//               <g>
//                 <path
//                   style={{ fill: "#FCC309" }}
//                   d="M187.195,208.297h-68.267L43.835,384.084c-3.413,7.68-1.707,16.213,3.413,22.187
// 			c4.267,4.267,10.24,6.827,17.92,6.827h40.96c7.68,0,14.507-5.12,17.067-11.947L187.195,208.297z"
//                 />
//                 <polygon
//                   style={{ fill: "#FCC309" }}
//                   points="204.261,140.031 323.728,140.031 323.728,88.831 204.261,88.831 		"
//                 />
//               </g>
//               <path
//                 d="M323.728,148.564H204.261c-5.12,0-8.533-3.413-8.533-8.533v-51.2c0-5.12,3.413-8.533,8.533-8.533h119.467
// 		c5.12,0,8.533,3.413,8.533,8.533v51.2C332.261,145.151,328.848,148.564,323.728,148.564z M212.795,131.497h102.4V97.364h-102.4
// 		V131.497z"
//               />
//               <path
//                 d="M161.595,455.764H65.168c-20.48,0-39.253-8.533-51.2-23.04c-15.36-18.773-19.627-45.227-9.387-67.413l57.173-114.347
// 		c3.413-7.68,3.413-16.213-0.853-23.04c-4.267-6.827-11.947-11.093-20.48-11.093c-5.12,0-8.533-3.413-8.533-8.533
// 		c0-5.12,3.413-8.533,8.533-8.533h180.907c2.56,0,5.12,1.707,6.827,3.413c1.707,2.56,1.707,5.12,1.707,7.68l-51.2,161.28
// 		c0,1.707,0.853,4.267,1.707,5.973l11.093,12.8c10.24,11.947,12.8,28.16,5.973,41.813
// 		C190.608,446.377,176.955,455.764,161.595,455.764z M73.701,216.831c0.853,0.853,0.853,1.707,1.707,2.56
// 		c7.68,11.947,8.533,27.307,1.707,40.107l-56.32,113.493c-6.827,16.213-4.267,34.987,6.827,49.493
// 		c8.533,10.24,22.187,17.067,37.547,17.067h96.427c9.387,0,16.213-5.12,20.48-12.8c3.413-8.533,2.56-17.067-3.413-23.893
// 		l-11.093-12.8c0,0,0-0.853-0.853-0.853c-4.267-5.12-5.973-11.947-5.12-18.773c0-0.853,0-0.853,0-1.707l47.787-151.893H73.701z"
//               />
//               <path
//                 d="M106.128,421.631h-40.96c-10.24,0-18.773-4.267-24.747-10.24c-6.827-8.533-9.387-20.48-5.12-30.72l75.093-174.933
// 		c1.707-3.413,4.267-5.12,7.68-5.12h68.267c2.56,0,5.12,1.707,6.827,3.413c1.707,2.56,1.707,5.12,0.853,7.68l-64,192.853
// 		C127.461,414.804,117.221,421.631,106.128,421.631z M124.901,216.831L51.515,387.497c-1.707,4.267-0.853,9.387,2.56,13.653
// 		c1.707,1.707,5.973,3.413,11.093,3.413h40.96c4.267,0,7.68-2.56,9.387-5.973l59.733-181.76H124.901z"
//               />
//               <path
//                 d="M263.995,265.471c-0.853,0-1.707,0-2.56-0.853c-27.307-9.387-37.547-18.773-45.227-40.96
// 		c-1.707-4.267,0.853-9.387,5.12-11.093c4.267-1.707,9.387,0.853,11.093,5.12c4.267,14.507,9.387,21.333,34.133,29.867
// 		c4.267,1.707,6.827,5.973,5.12,11.093C270.821,262.911,267.408,265.471,263.995,265.471z"
//               />
//               <path
//                 d="M477.328,208.297H366.395c-5.12,0-8.533-3.413-8.533-8.533v-8.533c0-18.773,15.36-34.133,34.133-34.133h85.333
// 		c5.12,0,8.533,3.413,8.533,8.533v34.133C485.861,204.884,482.448,208.297,477.328,208.297z M374.928,191.231h93.867v-17.067h-76.8
// 		C382.608,174.164,374.928,181.844,374.928,191.231L374.928,191.231z"
//               />
//               <path
//                 d="M477.328,97.364h-51.2c-5.12,0-8.533-3.413-8.533-8.533v-25.6c0-5.12,3.413-8.533,8.533-8.533h51.2
// 		c5.12,0,8.533,3.413,8.533,8.533v25.6C485.861,93.951,482.448,97.364,477.328,97.364z M434.661,80.297h34.133v-8.533h-34.133
// 		V80.297z"
//               />
//               <path
//                 d="M110.395,97.364h-51.2c-5.12,0-8.533-3.413-8.533-8.533v-25.6c0-5.12,3.413-8.533,8.533-8.533h51.2
// 		c5.12,0,8.533,3.413,8.533,8.533v25.6C118.928,93.951,115.515,97.364,110.395,97.364z M67.728,80.297h34.133v-8.533H67.728V80.297z
// 		"
//               />
//               <path
//                 d="M246.075,302.164h-52.053c-2.56,0-5.12-1.707-6.827-3.413c-1.707-1.707-1.707-5.12-0.853-7.68l27.307-85.333
// 		c0.853-3.413,4.267-5.973,8.533-5.973h85.333c5.12,0,8.533,3.413,8.533,8.533v24.747
// 		C315.195,271.444,284.475,302.164,246.075,302.164z M205.968,285.097h40.107c29.013,0,52.053-23.04,52.053-52.053v-16.213h-70.827
// 		L205.968,285.097z"
//               />
//               <path
//                 d="M110.395,361.897c0-9.387-7.68-17.067-17.067-17.067s-17.067,7.68-17.067,17.067c0,9.387,7.68,17.067,17.067,17.067
// 		S110.395,371.284,110.395,361.897"
//               />
//               <path
//                 d="M144.528,276.564c0-9.387-7.68-17.067-17.067-17.067s-17.067,7.68-17.067,17.067c0,9.387,7.68,17.067,17.067,17.067
// 		S144.528,286.804,144.528,276.564"
//               />
//               <path
//                 d="M161.595,182.697h-102.4c-5.12,0-8.533-3.413-8.533-8.533c0-5.12,3.413-8.533,8.533-8.533h102.4
// 		c5.12,0,8.533,3.413,8.533,8.533C170.128,179.284,166.715,182.697,161.595,182.697z"
//               />
//               <path
//                 d="M161.595,148.564h-102.4c-5.12,0-8.533-3.413-8.533-8.533c0-5.12,3.413-8.533,8.533-8.533h102.4
// 		c5.12,0,8.533,3.413,8.533,8.533C170.128,145.151,166.715,148.564,161.595,148.564z"
//               />
//               <path
//                 d="M366.395,216.831H7.995c-5.12,0-8.533-3.413-8.533-8.533v-25.6c0-1.707,0.853-3.413,1.707-5.12l9.387-12.8
// 		c6.827-9.387,6.827-23.04,0-32.427l-9.387-12.8c-0.853-0.853-1.707-2.56-1.707-5.12v-25.6c0-5.12,3.413-8.533,8.533-8.533h494.933
// 		c5.12,0,8.533,3.413,8.533,8.533v76.8c0,5.12-3.413,8.533-8.533,8.533H391.995c-9.387,0-17.067,7.68-17.067,17.067v17.067
// 		C374.928,213.417,371.515,216.831,366.395,216.831z M16.528,199.764h341.333v-8.533c0-18.773,15.36-34.133,34.133-34.133h102.4
// 		V97.364H16.528v14.507l7.68,10.24c11.947,15.36,11.947,37.547,0,52.907l-7.68,11.093V199.764z"
//               />
//             </g>
//           </svg>
//           31/60
//         </div>
//       </div> */}
//       <WheelContainer>
//         <svg
//           fill="#000000"
//           className="absolute z-[2] -top-1 left-[50%] mx-auto"
//           height="20px"
//           width="30px"
//           version="1.1"
//           id="Capa_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           viewBox="0 0 490 490"
//           xmlSpace="preserve"
//         >
//           <polygon points="245,456.701 490,33.299 0,33.299 " />
//         </svg>
//         <svg
//           fill="#000000"
//           className="absolute z-[2] rotate-180 -bottom-1 left-[50%] mx-auto"
//           height="20px"
//           width="30px"
//           version="1.1"
//           id="Capa_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           viewBox="0 0 490 490"
//           xmlSpace="preserve"
//         >
//           <polygon points="245,456.701 490,33.299 0,33.299 " />
//         </svg>
//         <Wheel animate={controls}>
//           {allItems.map((item, index) => (
//             <WheelItem
//               quantity={item.quantity}
//               bgColor={getBG(item.quantity)}
//               key={index}
//             >
//               {/* {item.name} */}
//               <div className="w-full flex overflow-hidden  gap-4 h-full">
//                 {array.map((itm, i) => {
//                   return (
//                     <div
//                       className={`px-[5px] ${
//                         index % 2 ? "rotate-45" : "-rotate-45"
//                       } relative right-10 bottom-10 h-[170%] mb-4 opacity-10  bg-slate-100 `}
//                     ></div>
//                   );
//                 })}
//               </div>
//             </WheelItem>
//           ))}
//         </Wheel>
//       </WheelContainer>
//     </div>
//   );
// };

// export default HorizontalWheel;


// components/HorizontalWheel.js

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const WheelContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Wheel = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

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

const WheelItem = styled.div`
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

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; // Circular image
  margin-bottom: 5px;
  object-fit: cover;
`;

const HorizontalWheel = ({ participants, winnerIndex, winningParticipant }) => {
  const controls = useAnimation();
  const [isSpinning, setIsSpinning] = useState(false);

  // Constants
  const SLOT_WIDTH = 160; // Adjusted if needed
  const SPIN_DURATION = 5;
  const NUM_SPINS = 3;

  // Calculate total value
  const totalValue = participants.reduce((acc, p) => acc + p.totalValue, 0);

  // Generate wheel items based on participant contributions
  console.log(participants);
  console.log("win",winningParticipant);
  

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
  }, [winnerIndex]);

  const spinWheel = (winnerIndex) => {
    setIsSpinning(true);

    const adjustedWinnerIndex =
      winnerIndex + wheelItems.length * (NUM_SPINS * 2 - 1);

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

  const getBG = (index) => {
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
                  src={participant.img || "path/to/placeholder.jpg"}
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
          <h2>Winner: {winningParticipant.user.username}</h2>
        </div>
      )}
    </div>
  );
};

export default HorizontalWheel;






