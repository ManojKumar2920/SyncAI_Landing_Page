import React from 'react';
import TableIcon from "@/assets/syncnode/tableicon.png";
import Image from "next/image";

const Recent = () => {
  return (
    <div className=' w-[40%] rounded-3xl bg-gradient-to-b from-[#252627] to-[#121212]'>
        <div className=" p-8">
            <div className=' py-[10px]'>

        <h1 className=" bg-gradient-to-b italic from-[#193558] to-[#41CEEC] bg-clip-text text-transparent font-extrabold text-3xl">
          Recently Joined
        </h1>
        <p className=' text-white'>Refer a friend and win!</p>
            </div>
        <table className="text-white w-full mt-4">
          <tbody>
            <tr>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Image
                    src={TableIcon}
                    width={40}
                    className="rounded-full mr-3"
                    alt="User Icon"
                  />
                  <div>
                    <h1 className="text-base">Sam Jeffery</h1>
                    <p className="text-slate-400 text-xs">Reffered By @Sam12</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center text-[12px] text-slate-500">12 mins ago</td>
            </tr>
            <tr>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Image
                    src={TableIcon}
                    width={40}
                    className="rounded-full mr-3"
                    alt="User Icon"
                  />
                  <div>
                    <h1 className="text-base">Sam Jeffery</h1>
                    <p className="text-slate-400 text-xs">Reffered By @Sam12</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center text-[12px] text-slate-500">12 mins ago</td>
            </tr>
            <tr>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Image
                    src={TableIcon}
                    width={40}
                    className="rounded-full mr-3"
                    alt="User Icon"
                  />
                  <div>
                    <h1 className="text-base">Sam Jeffery</h1>
                    <p className="text-slate-400 text-xs">Reffered By @Sam12</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center text-[12px] text-slate-500">12 mins ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Recent