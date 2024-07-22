import React from "react";
import Image from "next/image";
import NodeBud from "./NodeBud";
import NodeBoxes from "./NodeBoxes";
import {
  anchorIdentityLayer,
  dispatchLayer,
  ingressionLayer,
  queryingLayer,
} from "./NodeData";
import VectorLogo from "@/assets/syncnode/vector.png";
import PolygonLogo from "@/assets/syncnode/polygon.png";
import { TbBrandTelegram as Telegram } from "react-icons/tb";
import { FaXTwitter as XIcon, FaWhatsapp as Whatsapp } from "react-icons/fa6";

const SyncNode = () => {
  return (
    <div className="relative h-auto">
      <div>
        <div className="pb-10">
          <p className="text-4xl text-center text-white">
            Sync Node <br />
            The building blocks <br />
            <span className="bg-gradient-to-b from-[#F2f2f2] to-[#888888] bg-clip-text text-transparent">
              to democratize comms <br />
              on Cardano using
            </span>
          </p>
        </div>
        <div className="relative">
          <div className="">
            <NodeBud />
          </div>

          <div className="absolute top-0 flex w-full justify-between 2xl:justify-around px-5 md:px-10 h-full">
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center justify-start">
                <div className="flex flex-col gap-3">
                  <div className="bg-gradient-to-b p-[1px] from-blue-500 to-slate-500 rounded-xl">
                    <div className="flex items-center justify-end p-3 gap-3 rounded-xl bg-[#151515]">
                      <Image
                        src={VectorLogo}
                        width={30}
                        height={30}
                        alt="Vector Logo"
                      />
                      <Image
                        src={PolygonLogo}
                        width={30}
                        height={30}
                        alt="Polygon Logo"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-b p-[1px] from-blue-500 to-slate-500 rounded-xl">
                    <div className="flex items-center justify-start p-3 gap-3 rounded-xl bg-[#151515] text-white text-2xl">
                      <XIcon />
                      <Telegram />
                      <Whatsapp />
                    </div>
                  </div>
                </div>
                <NodeBoxes layer={anchorIdentityLayer} />
              </div>
              <NodeBoxes layer={ingressionLayer} />
            </div>
            <div className="flex flex-col relative items-start justify-center h-auto ">
              <NodeBoxes layer={dispatchLayer} />
              <NodeBoxes layer={queryingLayer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncNode;
