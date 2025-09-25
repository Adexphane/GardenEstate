"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const DualScrollSections = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const xPosition1 = useMotionValue(0);
  const xPosition2 = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (scrollDelta !== 0) {
        // Section 1: Move left when scrolling down, right when scrolling up
        xPosition1.set(xPosition1.get() - scrollDelta * 0.5);

        // Section 2: Move right when scrolling down, left when scrolling up (opposite)
        xPosition2.set(xPosition2.get() + scrollDelta * 0.5);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, xPosition1, xPosition2]);

  return (
    <div className='font-manrope py-[20vh]'>
      {/* Add some content above to enable scrolling */}

      {/* First Scroll Section */}
      <div className='flex items-center rounded-4xl whitespace-nowrap overflow-hidden'>
        <motion.p
          className='text-[6vh] sm:text-[10vh] tracking-tight font-semibold'
          style={{ x: xPosition1 }}
        >
          GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY
          LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR
          SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES •
        </motion.p>
      </div>

      {/* Second Scroll Section - Opposite Direction */}
      <div className='flex items-center justify-center rounded-4xl whitespace-nowrap overflow-hidden'>
        <motion.p
          className='text-[6vh] sm:text-[10vh] tracking-tight font-semibold'
          style={{ x: xPosition2 }}
        >
          GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY
          LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR
          SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES •
        </motion.p>
      </div>
    </div>
  );
};

export default DualScrollSections;
