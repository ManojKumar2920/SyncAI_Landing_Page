'use client'
import React from 'react';
import SyncAI_Logo from '@/assets/logos/sync_logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn as LinkedIn, FaTwitter as Twitter, FaFacebookF as Facebook } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const NavBar = () => {

  const pathname = usePathname();

  const getIconColor = (path) => pathname === path ? ' bg-gradient-to-b from-[#193558] to-[#41CEEC] bg-clip-text text-transparent font-extrabold' : 'text-white';
  return (
    <div>
        <div className=' text-[#ffff] flex items-center justify-between mx-8 py-4 border-b border-slate-500 z-20'>
            <div>
                <Image src={SyncAI_Logo} alt='Sync AI' width={30} height={30}></Image>
            </div>
            <div className=' flex items-center justify-between w-[35%] '>
                <Link href={"/"} className={`${getIconColor('/')}`}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"#features"} className={`${getIconColor('/#features')}`} scroll>Features</Link>
                <Link href={"/"}>Node</Link>
                <Link href={"/"}>Contact</Link>
            </div>
            <div className=' flex gap-4'>
                <Link href={"/"}><LinkedIn /></Link>
                <Link href={"/"}><Twitter /></Link>
                <Link href={"/"}><Facebook /></Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar