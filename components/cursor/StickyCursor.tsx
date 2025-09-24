"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface StickyCursorProps {
  stickyElement: React.RefObject<HTMLElement | null> | null;
}

export default function StickyCursor({ stickyElement }: StickyCursorProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = useSpring(1, smoothOptions);

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    
    if (!isVisible) {
      setIsVisible(true);
    }

    if (stickyElement && stickyElement.current) {
      const rect = stickyElement.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      const maxDistance = Math.max(rect.width, rect.height) * 0.8;

      if (distance < maxDistance) {
        setIsHovered(true);
        mouse.x.set(centerX - cursorSize / 2);
        mouse.y.set(centerY - cursorSize / 2);
        scale.set(4);
      } else {
        setIsHovered(false);
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
        scale.set(1);
      }
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [stickyElement]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scale: scale,
        }}
        className={`fixed w-[15px] h-[15px] rounded-full pointer-events-none mix-blend-difference ${
          isHovered 
            ? 'bg-transparent border-2 border-black' 
            : 'bg-black/80'
        }`}
      >
        
      </motion.div>
    </div>
  );
}