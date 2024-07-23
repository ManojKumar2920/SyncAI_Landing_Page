'use client'
import React from 'react'
import Leaderboard from './Leaderboard'
import Recent from './Recent';
import { IoIosArrowForward as Arrow } from "react-icons/io";
import { useScrollRevealBottom, useScrollRevealRight } from '../Reveal/ScrollReveal';

const SyncedClub = () => {

  useScrollRevealBottom();
  useScrollRevealRight();
  return (
    <div className=' py-10'>
        <div>
            <div className=' text-center reveal'>
                <p className=' text-slate-400 py-16'>Finetuned AI (LLM) Inference for counterparty <br /> discovery and execution</p>
                <p className=' text-4xl text-white'>The Synced Club Consortium</p>
            </div>
            <div className=' flex items-center justify-center gap-6 p-10 reveal-right'>
                <Leaderboard />
                <Recent />
            </div>
            <div className=" mb-8 text-slate-300 flex items-center justify-center gap-1 reveal-right">
            <div className=" rounded-full border p-1">
              {" "}
              <Arrow className=" text-xl text-[#04F8FF]" />
            </div>{" "}
            SYNCED CLUB
          </div>
        </div>
    </div>
  )
}

export default SyncedClub