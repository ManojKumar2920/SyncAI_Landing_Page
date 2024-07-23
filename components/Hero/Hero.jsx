"use client";
import Image from "next/image";
import React from "react";
import HeroVideo from "@/assets/hero/hero-video.png";
import Primary from "../Button/Primary";
import BlurDrop from "../Gradient/BlurDrop";
import { useScrollRevealBottom } from "../Reveal/ScrollReveal";

const Hero = () => {
  useScrollRevealBottom();
  return (
    <div className="  flex flex-col items-center justify-center text-center relative">
      <div className=" absolute -left-28 top-0 animate-circularMotionLeft">
        <BlurDrop />
      </div>
      <div className=" absolute -right-28 top-0 animate-circularMotionRight">
        <BlurDrop />
      </div>

      <div className=" text-white flex flex-col gap-4 mt-14 z-20">
        <h1 className=" text-6xl reveal">Sync AI</h1>
        <p className=" text-3xl font-light reveal">
          AI powered Communications layer on top of Cardano <br />
          with built-in SocialFi.
        </p>
        <div className=" mt-2 flex gap-3 items-center justify-center reveal">
          <Primary href={"/"} children={"Whitepaper"} />
          <Primary href={"/"} children={"Synced Club"} />
        </div>
      </div>
      <div className=" w-[90%] py-8 z-20 reveal">
        <Image
          src={HeroVideo}
          alt="Sync AI Intro"
          className=" rounded-3xl"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
