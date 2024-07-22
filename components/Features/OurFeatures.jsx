import Image from "next/image";
import React from "react";
import Feature1 from "@/assets/features/features1.png";
import Feature2 from "@/assets/features/features2.png";
import Feature3 from "@/assets/features/features3.png";
import Feature4 from "@/assets/features/features4.png";
import Feature5 from "@/assets/features/features5.png";
import Feature6 from "@/assets/features/features6.png";

const OurFeatures = () => {
  return (
    <div className="relative" id="features">
      {/* blur backdrop */}
      <div className="absolute -right-10 -top-10 z-10">
        <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-3xl opacity-40"></div>
      </div>
      <div className="absolute -right-10 bottom-40 z-10">
        <div className="bg-[radial-gradient(circle,_rgba(72,233,255,1)_0%,_rgba(26,86,238,1)_100%)] w-[500px] h-96 blur-3xl opacity-40"></div>
      </div>

      <div className="text-white p-10 relative z-20">
        <p className="text-slate-400">OUR FEATURES</p>
        <h1 className="text-right text-5xl">
          SyncAI is an unified Social-Fi <br />
          architecture with abstract programming <br />
          bringing a new age of{" "}
          <span className=" bg-gradient-to-b from-[#F2f2f2] to-[#8f8f8f] bg-clip-text text-transparent">
            user-centric experience
          </span>
        </h1>
      </div>

      {/* features grid */}
      <div className=" p-10">
        <div className="grid grid-cols-5 grid-rows-12 gap-4">
          <div className="col-span-3 row-span-4 relative">
            <Image
              src={Feature1}
              alt="Sync ID Features"
              width={800}
              className="rounded-3xl border border-blue-300 object-cover grayscale-50"
            ></Image>
            <div className="absolute inset-0 bg-black opacity-60 h-[445px] rounded-3xl"></div>
            <div className="text-white absolute left-0 bottom-0 p-10">
              <p className="font-medium text-xl">
                SyncID: Your Palm is Your Public Key
              </p>
              <p>
                Sync ID is a sybil-resistant verifiable credential, powered by
                palm signatures secured by zkp, which is directly linked to your
                Cardano public key and Twitter.
              </p>
            </div>
          </div>

          <div className="col-span-2 row-span-4 col-start-4 ">
            <Image
              src={Feature2}
              alt="Sync ID Features"
              width={450}
              className=" rounded-3xl border border-blue-300"
            ></Image>
          </div>
          <div className="col-span-2 row-span-4 row-start-5 ">
            <Image
              src={Feature3}
              alt="Sync ID Features"
              width={500}
              className=" rounded-3xl border border-blue-300"
            ></Image>
          </div>
          <div className="col-span-3 row-span-4 col-start-3 row-start-5 ">
            <Image
              src={Feature4}
              alt="Sync ID Features"
              width={800}
              height={500}
              className=" rounded-3xl border border-blue-300"
            ></Image>
          </div>
          <div className="col-span-3 row-span-4 row-start-9  rounded-xl">
            <Image
              src={Feature5}
              alt="Sync ID Features"
              width={800}
              height={500}
              className=" rounded-3xl border border-blue-300"
            ></Image>
          </div>
          <div className="col-span-2 row-span-4 col-start-4 row-start-9 ">
            <Image
              src={Feature6}
              alt="Sync ID Features"
              width={450}
              className=" rounded-3xl border border-blue-300"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
