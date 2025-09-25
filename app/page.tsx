"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/layout/hero/Hero";
import Section1 from "@/components/layout/section1/Section1";
import Section2 from "@/components/layout/section2/Section2";
import Section3 from "@/components/layout/section3/Section3";
import Section4 from "@/components/layout/section4/Section4";
import Section5 from "@/components/layout/section5/Section5";
import Section6 from "@/components/layout/section6/Section6";
import LoadingCover from "@/components/ui/LoadingCover";

// Adjust path as needed
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Home() {
  // State to control loading cover - you can toggle this or make it a prop
  const [enableLoadingCover, setEnableLoadingCover] = useState(true);

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
    <>
      {/* Loading Cover */}
      <LoadingCover isEnabled={true} />

      {/* Main Content */}
      <div className='cursor-none overflow-hidden'>
        <div className=''>
          <Header />
        </div>
        <div className=''>
          <Hero />
        </div>
        <div className=''>
          <Section1 />
        </div>
        <div className=''>
          <Section3 />
        </div>
        <div className=''>
          <Section2 />
        </div>
        <div className=''>
          <Section4 />
        </div>
        <div className=''>
          <Section5 />
        </div>
        <div className=''>
          <Section6 />
        </div>

        <Footer height={600} />
      </div>
    </>
  );
}
