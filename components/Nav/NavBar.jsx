'use client'
import React from 'react';
import SyncAI_Logo from '@/assets/logos/sync_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn as LinkedIn, FaTwitter as Twitter, FaFacebookF as Facebook } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const NavBar = () => {
  const pathname = usePathname();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px',
    threshold: 0.1
  });

  const getIconColor = (path) => pathname === path ? 'bg-gradient-to-b from-[#193558] to-[#41CEEC] bg-clip-text text-transparent font-extrabold' : 'text-white';

  return (
    <div ref={ref} className={`${inView ? 'slideDown' : 'opacity-0'}`}>
      <div className='text-[#ffff] flex items-center justify-between mx-8 py-4 border-b border-slate-500 z-20'>
        <div>
          <Image src={SyncAI_Logo} alt='Sync AI' width={30} height={30} />
        </div>
        <div className='flex items-center justify-between w-[35%]'>
          <Link href="/" className={getIconColor('/')}>Home</Link>
          <Link href="/about" className={getIconColor('/about')}>About</Link>
          <Link href="#features" scroll className={getIconColor('/#features')}>Features</Link>
          <Link href="/node" className={getIconColor('/node')}>Node</Link>
          <Link href="/contact" className={getIconColor('/contact')}>Contact</Link>
        </div>
        <div className='flex gap-4'>
          <Link href="https://www.linkedin.com" aria-label="LinkedIn"><LinkedIn /></Link>
          <Link href="https://twitter.com" aria-label="Twitter"><Twitter /></Link>
          <Link href="https://www.facebook.com" aria-label="Facebook"><Facebook /></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
