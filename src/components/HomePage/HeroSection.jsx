"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import textBlocks from "@/pageData/HeroData";
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});
const HeroSection = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#ebecef",
    showAtmosphere: true,
    atmosphereColor: "#fff",
    atmosphereAltitude: 1,
    emissive: "#fcfcfc",
    emissiveIntensity: 1.8,
    shininess: 2,
    polygonColor: "#48495b",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "red",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <>
      <div className="lg:pt-[35px] pt-[60px] w-full  mx-auto flex flex-col justify-between md:gap-[25px] gap-[15px]">
        <h1 className="[leading-trim:both] [text-edge:cap] 2xl:text-[60px] leading-none tracking-normal xl:tracking-[-3.6px] xl:text-[54px] lg:text-[44px] md:text-[36px] text-[32px] text-center font-semibold">
          Wall Street Alpha to Main Street
        </h1>
        <p className="text-[16px] text-[#555] mx-auto max-w-[669px] tracking-normal xl:tracking-[-0.48px] leading-[1.6] text-center">
          Empowering everyday investors with AI-driven market insights. Leverage
          quantitative strategies and real-time news analytics previously
          reserved for institutional investors.
        </p>
        <div className="btn-container flex gap-[15px] items-center justify-center">
          <Link href={"/"}>
            <button className="p-[7px] lg:p-[10px] bg-[#070707] rounded-[4px] grid grid-cols-[auto_5px] items-center gap-[5px]">
              <span className="btn-lbl text-[#F1F4F2] text-[12px] sm:text-[14px] md:text-[16px]">
                Unlock Alpha Now
              </span>
              <span className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    d="M1.80078 2.93758C1.80078 2.53815 2.1402 2.21416 2.55983 2.21416H2.84106C3.2607 2.21416 3.60012 2.53815 3.60012 2.93758V3.20501C3.60012 3.60443 3.2607 3.92843 2.84106 3.92843H2.55983C2.1402 3.92843 1.80078 3.60443 1.80078 3.20501V2.93758Z"
                    fill="#F1F4F2"
                  />
                  <path
                    d="M5.39922 8.08047C5.39922 7.68105 5.05892 7.35705 4.64016 7.35705H4.35893C3.93929 7.35705 3.599 7.68105 3.599 8.08047V8.3479C3.599 8.74733 3.93929 9.07132 4.35893 9.07132H4.64016C5.05892 9.07132 5.39922 8.74733 5.39922 8.3479V8.08047Z"
                    fill="#F1F4F2"
                  />
                  <path
                    d="M7.19994 6.36629C7.19994 5.96686 6.85964 5.64286 6.44 5.64286H6.15877C5.74001 5.64286 5.39972 5.96686 5.39972 6.36629V6.63371C5.39972 7.03314 5.74001 7.35714 6.15877 7.35714H6.44C6.85964 7.35714 7.19994 7.03314 7.19994 6.63371V6.36629Z"
                    fill="#F1F4F2"
                  />
                  <path
                    d="M3.60012 9.79467C3.60012 9.39524 3.2607 9.07124 2.84106 9.07124H2.55983C2.1402 9.07124 1.80078 9.39524 1.80078 9.79467V10.0621C1.80078 10.4615 2.1402 10.7855 2.55983 10.7855H2.84106C3.2607 10.7855 3.60012 10.4615 3.60012 10.0621V9.79467Z"
                    fill="#F1F4F2"
                  />
                  <path
                    d="M1.80022 11.5092C1.80022 11.1098 1.45992 10.7858 1.04028 10.7858H0.759053C0.340296 10.7858 0 11.1098 0 11.5092V11.7766C0 12.176 0.340296 12.5 0.759053 12.5H1.04028C1.45992 12.5 1.80022 12.176 1.80022 11.7766V11.5092Z"
                    fill="#F1F4F2"
                  />
                  <path
                    d="M1.80022 1.22339C1.80022 0.823967 1.45992 0.499969 1.04028 0.499969H0.759053C0.340296 0.499969 0 0.823967 0 1.22339V1.49082C0 1.89024 0.340296 2.21424 0.759053 2.21424H1.04028C1.45992 2.21424 1.80022 1.89024 1.80022 1.49082V1.22339Z"
                    fill="#F1F4F2"
                  />
                  <path
                    d="M5.39922 4.6521C5.39922 4.25267 5.05892 3.92867 4.64016 3.92867H4.35893C3.93929 3.92867 3.599 4.25267 3.599 4.6521V4.91952C3.599 5.31895 3.93929 5.64295 4.35893 5.64295H4.64016C5.05892 5.64295 5.39922 5.31895 5.39922 4.91952V4.6521Z"
                    fill="#F1F4F2"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <Link href={"/"}>
            <button className="p-[7px] lg:p-[10px] border border-[#070707] rounded-[4px] text-[#070707] text-[12px] sm:text-[14px] md:text-[16px]">
              Get AI-Powered Insights
            </button>
          </Link>
        </div>
      </div>
      <div className="globe-area max-w-[650px] xl:max-w-[900px] mx-auto w-full relative overflow-hidden min-h-[480px] xl:min-h-[640px] px-4">
        <div className="globe-container absolute w-full  z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
          <div className="text-block-container w-full flex flex-col gap-[10px]">
            {textBlocks.map((block) => (
              <div
                key={block.id}
                id={block.id}
                className={`${"globe-" + block.id} absolute z-[3] ${
                  block.top
                } ${block.left || ""} ${
                  block.right || ""
                }  w-full max-w-[200px] rounded-[10px] xl:py-[12px] py-[6px] px-[8px] text-[12px] leading-[1.5] text-[#555] bg-white shadow-[0px_9px_30px_-16px_#A4A4A4]`}
              >
                {block.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
