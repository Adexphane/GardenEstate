"use client";

import Header from "@/components/layout/header/Header";
import Hero from "@/components/layout/hero/Hero";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      wheelMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div className=' cursor-none overflow-hidden'>
      <div className=''>
        <Header />
      </div>
      <div className=''>
        <Hero />
      </div>
      <div className=' h-[100vh]' />
    </div>
  );
}
