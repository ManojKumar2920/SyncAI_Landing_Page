import React from "react";
import TableIcon from "@/assets/syncnode/tableicon.png";
import Image from "next/image";

const Leaderboard = () => {
  return (
    <div className=" w-[60%] rounded-3xl bg-gradient-to-b from-[#252627] to-[#121212]">
      <div className=" p-8">
        <h1 className=" bg-gradient-to-b italic from-[#193558] to-[#41CEEC] bg-clip-text text-transparent font-extrabold text-3xl">
          LEADERBOARD
        </h1>
        <table className="text-white w-full mt-4">
          <thead className=" border-b border-slate-500">
            <tr>
              <th className="w-[5%] py-2 px-4 text-left italic">#</th>
              <th className="w-[85%] py-2 px-4 text-left italic">NAME</th>
              <th className="w-[10%] py-2 px-4 text-left italic">CHIPS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">1</td>
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
                    <p className="text-slate-400 text-xs">@Samjeff</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center">20</td>
            </tr>
            <tr>
              <td className="py-2 px-4">2</td>
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
                    <p className="text-slate-400 text-xs">@Samjeff</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center">20</td>
            </tr>
            <tr>
              <td className="py-2 px-4">3</td>
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
                    <p className="text-slate-400 text-xs">@Samjeff</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 text-center">20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
