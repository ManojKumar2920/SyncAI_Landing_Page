"use client";
import Image from "next/image";
import React from "react";
import Feature1 from "@/assets/features/features1.png";
import Feature2 from "@/assets/features/features2.png";
import Feature3 from "@/assets/features/features3.png";
import Feature4 from "@/assets/features/features4.png";
import Feature5 from "@/assets/features/features5.png";
import Feature6 from "@/assets/features/features6.png";
import { useInView } from 'react-intersection-observer';

const OurFeatures = () => {
  // Observe the sections for triggering animations
  const { ref: textSectionRef, inView: textSectionInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  const { ref: firstImageSectionRef, inView: firstImageSectionInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  const { ref: secondImageSectionRef, inView: secondImageSectionInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  const { ref: thirdImageSectionRef, inView: thirdImageSectionInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  return (
    <div className="relative" id="features">
      {/* blur backdrop */}
      <div className="absolute -right-10 -top-10 z-10">
        <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-3xl opacity-40"></div>
      </div>
      <div className="absolute -right-10 bottom-40 z-10">
        <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-3xl opacity-40"></div>
      </div>

      {/* Text Section */}
      <div className={`text-white p-10 relative z-20 ${textSectionInView ? 'fadeIn' : 'opacity-0'}`} ref={textSectionRef}>
        <p className="text-slate-400">OUR FEATURES</p>
        <h1 className="text-right text-5xl">
          SyncAI is a unified Social-Fi <br />
          architecture with abstract programming <br />
          bringing a new age of{" "}
          <span className="bg-gradient-to-b from-[#F2f2f2] to-[#8f8f8f] bg-clip-text text-transparent">
            user-centric experience
          </span>
        </h1>
      </div>

      {/* First Image Section */}
      <div className=" my-[2%]" ref={firstImageSectionRef}>
        <div className={`w-[90%] mx-auto flex flex-col gap-3 ${firstImageSectionInView ? 'fadeIn' : 'opacity-0'}`}>
          <div className={`flex flex-row gap-4 items-center ${firstImageSectionInView ? 'slideInLeft' : 'opacity-0'}`}>
            <div className="relative">
              <Image src={Feature1} alt="" className="object-cover grayscale-[50%] border-blue-400 border-[2px] rounded-3xl" />
              <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-3xl"></div>
              <div className="absolute bottom-3 left-0 right-0 p-5 z-20 text-white">
                <p className="text-[25px]">SyncID: Your Palm is Your Public Key</p>
                <p className="text-[14px]">Sync ID is a sybil-resistant verifiable credential, powered by palm signatures</p>
                <p className="text-[14px]">secured by zkp, which is directly linked to your Cardano public key and Twitter.</p>
              </div>
            </div>
            <Image src={Feature2} alt="" className={`slideInLeft ${firstImageSectionInView ? 'slideInLeft' : 'opacity-0'}`} />
          </div>
        </div>
      </div>

      {/* Second Image Section */}
      <div className=" my-[2%]" ref={secondImageSectionRef}>
        <div className={`w-[90%] mx-auto flex flex-col gap-3 ${secondImageSectionInView ? 'fadeIn' : 'opacity-0'}`}>
          <div className={`flex flex-row gap-4 items-center ${secondImageSectionInView ? 'slideInRight' : 'opacity-0'}`}>
            <Image src={Feature3} alt="" className={`border-[var(--primaryBlueText)] border-[1px] rounded-3xl ${secondImageSectionInView ? 'slideInRight' : 'opacity-0'}`} />
            <Image src={Feature4} alt="" className={`border-[var(--primaryBlueText)] border-[1px] rounded-3xl ${secondImageSectionInView ? 'slideInRight' : 'opacity-0'}`} />
          </div>
        </div>
      </div>

      {/* Third Image Section */}
      <div className=" my-[2%]" ref={thirdImageSectionRef}>
        <div className={`w-[90%] mx-auto flex flex-col gap-3 ${thirdImageSectionInView ? 'fadeIn' : 'opacity-0'}`}>
          <div className={`flex flex-row gap-4 items-center ${thirdImageSectionInView ? 'slideInLeft' : 'opacity-0'}`}>
            <Image src={Feature5} alt="" className={`border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] 2xl:h-[789px] w-[1247px] ${thirdImageSectionInView ? 'slideInLeft' : 'opacity-0'}`} />
            <Image src={Feature6} alt="" className={`border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] 2xl:h-[789px] w-[789px] ${thirdImageSectionInView ? 'slideInLeft' : 'opacity-0'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
