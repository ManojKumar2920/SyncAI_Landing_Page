'use client';
import Image from "next/image";
import React from "react";
import LearningBanner from "@/assets/cta/banner.jpeg";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  // Observe the CTA section for triggering animations
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  return (
    <div className="py-20" ref={ref}>
      <div className="relative">
        <Image src={LearningBanner} alt="Learning Banner" className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-50'}`} />
        <div className={`absolute inset-0 flex flex-col z-20 text-center items-center justify-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className={`text-5xl text-white transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
            A new era for dApp-User Interactions <br />
            Get yourself Synced
          </h1>
          <div className={`mt-4 text-slate-300 flex items-center justify-center gap-1 transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
            <div className="rounded-full border p-1">
              <Arrow className="text-xl text-[#04F8FF]" />
            </div>
            SYNCED CLUB
          </div>
        </div>
        <div className={`absolute inset-0 bg-black opacity-60 transition-opacity duration-1000 ${inView ? 'opacity-60' : 'opacity-0'}`}></div>
      </div>
    </div>
  );
};

export default CTA;
