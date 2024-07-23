'use client'
import Image from "next/image";
import React from "react";
import LearningBanner from "@/assets/cta/banner.jpeg";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import { useScrollRevealBottom } from "../Reveal/ScrollReveal";

const CTA = () => {
  useScrollRevealBottom();
  return (
    <div className=" py-20">
      <div className=" relative">
        <Image src={LearningBanner} alt="Learning Banner" className=" reveal"></Image>
        <div className=" absolute inset-0 flex flex-col z-20 text-center items-center justify-center reveal">
          <h1 className=" text-5xl text-white">
            A new era for dApp-User Interactions <br />
            Get yourself Synced
          </h1>
          <div className=" mt-4 text-slate-300 flex items-center justify-center gap-1">
            <div className=" rounded-full border p-1">
              {" "}
              <Arrow className=" text-xl text-[#04F8FF]" />
            </div>{" "}
            SYNCED CLUB
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-60 reveal"></div>
      </div>
      
    </div>
  );
};

export default CTA;
