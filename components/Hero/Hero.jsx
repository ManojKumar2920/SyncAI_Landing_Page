"use client";
import Image from "next/image";
import React from "react";
import HeroVideo from "@/assets/hero/hero-video.png";
import Primary from "../Button/Primary";
import BlurDrop from "../Gradient/BlurDrop";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref: blurDropLeftRef, inView: blurDropLeftInView } = useInView({ triggerOnce: true });
  const { ref: blurDropRightRef, inView: blurDropRightInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center text-center relative">
      <div 
        ref={blurDropLeftRef}
        className={`absolute -left-28 top-0 ${blurDropLeftInView ? 'animate-circularMotionLeft ' : 'opacity-0'}`}
      >
        <BlurDrop />
      </div>
      <div 
        ref={blurDropRightRef}
        className={`absolute -right-28 top-0 ${blurDropRightInView ? 'animate-circularMotionRight ' : 'opacity-0'}`}
      >
        <BlurDrop />
      </div>

      <div 
        ref={textRef}
        className={`text-white flex flex-col gap-4 mt-14 z-20 ${textInView ? 'slideIn' : 'opacity-0'}`}
      >
        <h1 className="text-6xl">Sync AI</h1>
        <p className="text-3xl font-light">
          AI powered Communications layer on top of Cardano <br />
          with built-in SocialFi.
        </p>
        <div className="mt-2 flex gap-3 items-center justify-center">
          <Primary href={"/"} children={"Whitepaper"} />
          <Primary href={"/"} children={"Synced Club"} />
        </div>
      </div>
      <div 
        ref={imageRef}
        className={`w-[90%] py-8 z-20 ${imageInView ? 'fadeInUp' : 'opacity-0'}`}
      >
        <Image
          src={HeroVideo}
          alt="Sync AI Intro"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
