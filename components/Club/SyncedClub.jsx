import React from 'react'
import Leaderboard from './Leaderboard'
import Recent from './Recent';
import { IoIosArrowForward as Arrow } from "react-icons/io";

const SyncedClub = () => {
  return (
    <div>
        <div>
            <div className=' text-center'>
                <p className=' text-slate-400 py-16'>Finetuned AI (LLM) Inference for counterparty <br /> discovery and execution</p>
                <p className=' text-4xl text-white'>The Synced Club Consortium</p>
            </div>
            <div className=' flex items-center justify-center gap-6 p-10 '>
                <Leaderboard />
                <Recent />
            </div>
            <div className=" mb-8 text-slate-300 flex items-center justify-center gap-1">
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