import React from "react";
import SyncAI_Logo from "@/assets/logos/sync_logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp as Whatsapp } from "react-icons/fa6";
import { TbBrandTelegram as Telegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" p-10 border-t border-slate-500 text-white relative">
      <div className=" flex items-start justify-around py-6">
        <div className=" w-[25%] z-20 flex flex-col items-start gap-5">
          <div className=" flex gap-3 justify-center">
            <div className=" w-[30%]">
              <Image
                src={SyncAI_Logo}
                width={50}
                height={50}
                alt="Sync AI Logo"
              ></Image>
            </div>
            <p className=" text-sm">
              AI powered Communications layer on top of Cardano with built-in
              SocialFi.{" "}
            </p>
          </div>
          <div className=" flex flex-col pl-6">
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms</Link>
            <Link href={"/"}>Careers</Link>
          </div>
        </div>

        <div className="flex flex-col z-20 gap-3 justify-center">
          <h1 className=" text-2xl font-bold italic">PAGES</h1>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Node</Link>
        </div>

        <div className="flex flex-col z-20 gap-3 justify-center">
          <h1 className=" text-2xl font-bold italic">SOCIALS</h1>
          <Link href={"/"} className=" flex items-center justify-start gap-1">
            <Whatsapp className=" text-2xl" />
            Whatsapp
          </Link>
          <Link href={"/"} className=" flex items-center justify-start gap-1">
            <Telegram className=" text-2xl" /> Telegram
          </Link>
        </div>

        <div className="flex flex-col z-20 gap-3 justify-center">
          <h1 className=" text-2xl font-bold italic">CONTACT US</h1>
          <div>
            <h1 className=" text-lg">Address</h1>
            <p>About, About, About</p>
            <p>Address, Pincode</p>
          </div>
          <div>
            <h1 className=" text-lg">Contact</h1>
            <Link href={"tel:0123456678900"}>012345667 8900</Link>
          </div>
        </div>

      </div>

      <div className=" z-10">

      <div className=" absolute right-0 -top-10">
        <div className=" bg-gradient-to-b from-blue-600 to-blue-700 w-[400px] 2xl:w-[1000px] opacity-70 h-96 blur-3xl "></div>
      </div>
      <div className=" absolute -top-10  left-[430px]">
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 w-[400px] 2xl:w-[1000px] opacity-70 h-96 blur-3xl "></div>
      </div>
      <div className=" absolute -top-10 ">
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 w-[400px] 2xl:w-[1000px] opacity-70 h-96 blur-3xl "></div>
      </div>
      </div>

      <div className=" z-20 border-t border-slate-500">
        <div className=" flex justify-between text-sm text-slate-500 pt-4">
            <p>© SYNCAI  2024 , ALL RIGHTS RESERVED</p>
            <p>Designed by Influmarki, Developed by Manoj Kumar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
