'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Leaderboard from './Leaderboard';
import Recent from './Recent';
import { IoIosArrowForward as Arrow } from "react-icons/io";

const SyncedClub = () => {
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
    <div className='py-10'>
      <div>
        <div
          className={`text-center ${titleInView ? 'fadeIn' : 'opacity-0'}`}
          ref={titleRef}
        >
          <p className='text-slate-400 py-16'>
            Finetuned AI (LLM) Inference for counterparty <br /> discovery and execution
          </p>
          <p className='text-4xl text-white'>
            The Synced Club Consortium
          </p>
        </div>

        <div
          className={`flex items-center justify-center gap-6 p-10 ${contentInView ? 'slideInRight' : 'opacity-0'}`}
          ref={contentRef}
        >
          <Leaderboard />
          <Recent />
        </div>

        <div className={`mb-8 text-slate-300 flex items-center justify-center gap-1 ${contentInView ? 'slideInRight' : 'opacity-0'}`}>
          <div className="rounded-full border p-1">
            <Arrow className="text-xl text-[#04F8FF]" aria-label="Arrow icon" />
          </div>
          SYNCED CLUB
        </div>
      </div>
    </div>
  );
};

export default SyncedClub;
