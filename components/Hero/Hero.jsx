import Image from "next/image";
import React from "react";
import HeroVideo from "@/assets/hero/hero-video.png";
import Primary from "../Button/Primary";

const Hero = () => {
  return (
    <div className="  flex flex-col items-center justify-center text-center relative">
      <div className=" absolute -left-28 top-0">
        <div className=" bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[400px] h-96 blur-3xl z-10"></div>
      </div>
      <div className=" absolute -right-28 top-0">
        <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[400px] h-96 blur-3xl z-10"></div>
      </div>

      <div className=" text-white flex flex-col gap-4 mt-14 z-20">
        <h1 className=" text-6xl ">Sync AI</h1>
        <p className=" text-3xl font-light">
          AI powered Communications layer on top of Cardano <br />
          with built-in SocialFi.
        </p>
        <div className=" mt-2 flex gap-3 items-center justify-center">
          <Primary href={"/"} children={"Whitepaper"} />
          <Primary href={"/"} children={"Synced Club"} />
        </div>
      </div>
      <div className=" w-[90%] py-8 z-20">
        <Image src={HeroVideo} alt="Sync AI Intro" className=" rounded-3xl"></Image>
      </div>
    </div>
  );
};

export default Hero;
