'use client';
import Image from "next/image";
import React from "react";
import PaintImg from "@/assets/team/paint.jpeg";
import MenPaintImg from "@/assets/team/menpaint.jpeg";
import { FaXTwitter as XIcon, FaWhatsapp as Whatsapp } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';


const Team = () => {
  // Observe the title and content sections for triggering animations
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  return (
    <div className="relative">
      {/* Title */}
      <div className={`text-center text-4xl text-white ${titleInView ? 'fadeIn' : 'opacity-0'}`} ref={titleRef}>
        <h1>The Team of SyncAI</h1>
      </div>

      {/* Background Blob */}
      <div className="absolute -right-10 -bottom-32">
        <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-3xl opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className={`p-10 flex items-center justify-between gap-8 ${contentInView ? 'slideInLeft' : 'opacity-0'}`} ref={contentRef}>
        {/* member 1 */}
        <div className="relative group z-20">
          <Image src={PaintImg} className="rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9] to-[#1E80D6] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
          <div className="absolute left-0 bottom-0 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-3xl font-bold">SAM JEFFERY</h1>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <div className="flex items-center justify-start text-4xl text-white">
              <XIcon />
              <Whatsapp />
            </div>
          </div>
        </div>

        {/* member 2 */}
        <div className="relative group z-20">
          <Image src={MenPaintImg} className="rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9] to-[#1E80D6] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
          <div className="absolute left-0 bottom-0 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-3xl font-bold">SAM JEFFERY</h1>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <div className="flex items-center justify-start text-4xl text-white">
              <XIcon />
              <Whatsapp />
            </div>
          </div>
        </div>

        {/* member 3 */}
        <div className="relative group z-20">
          <Image src={PaintImg} className="rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9] to-[#1E80D6] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
          <div className="absolute left-0 bottom-0 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-3xl font-bold">SAM JEFFERY</h1>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <div className="flex items-center justify-start text-4xl text-white">
              <XIcon />
              <Whatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
