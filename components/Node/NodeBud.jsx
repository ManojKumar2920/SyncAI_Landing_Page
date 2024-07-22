import React from "react";
import Image from "next/image";
import CoinImage from "@/assets/syncnode/coin.png"; // Update this path to the actual image path

const NodeBud = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#121212] flex items-center justify-center">
          <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] rounded-full bg-[#121212] flex items-center justify-center z-10">
            <Image src={CoinImage} alt="Center Icon" width={100} height={100} md={150} lg={200} />
          </div>
        </div>
        <div className="absolute w-full h-full rounded-full border-4 border-gray-800 animate-pulse"></div>
      </div>
      <div className="absolute w-[135px] h-[135px] md:w-[200px] md:h-[200px] lg:w-[270px] lg:h-[270px] border-[40px] md:border-[60px] lg:border-[80px] border-gray-800 rounded-full"></div>
      <div className="absolute w-[165px] h-[165px] md:w-[250px] md:h-[250px] lg:w-[330px] lg:h-[330px] border-[2px] md:border-[3px] lg:border-[4px] border-gray-800 rounded-full"></div>
      <div className="absolute w-[180px] h-[180px] md:w-[270px] md:h-[270px] lg:w-[360px] lg:h-[360px] border-[2px] md:border-[3px] lg:border-[4px] border-gray-800 rounded-full"></div>
    </div>
  );
};

export default NodeBud;
