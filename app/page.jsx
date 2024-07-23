'use client'
import SyncedClub from "@/components/Club/SyncedClub";
import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/FAQ/FAQ";
import OurFeatures from "@/components/Features/OurFeatures";
import Hero from "@/components/Hero/Hero";
import SyncNode from "@/components/Node/SyncNode";
import Team from "@/components/Team/Team";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Hero />
      <OurFeatures />
      <CTA />
      <SyncNode />
      <SyncedClub />
      <Team />
      <FAQ />
    </div>
  );
}
