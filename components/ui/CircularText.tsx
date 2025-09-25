"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CircularTextProps {
  /** Text to display around the circle */
  text?: string;
  /** Size of the component in vh units */
  sizeVh?: number;
  /** Animation speed multiplier */
  animationSpeed?: number;
  /** Whether animation responds to scroll */
  scrollBased?: boolean;
  /** Auto-rotation speed when not scroll-based (degrees per frame) */
  autoRotationSpeed?: number;
  /** Icon component to display in center */
  icon?: React.ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;
  /** Icon size in vh units */
  iconSizeVh?: number;
  /** Icon stroke width */
  iconStrokeWidth?: number;
  /** Background color classes */
  bgColor?: string;
  /** Text color classes */
  textColor?: string;
  /** Icon color classes */
  iconColor?: string;
  /** Shadow classes */
  shadowColor?: string;
  /** Text size classes */
  textSize?: string;
  /** Font weight classes */
  fontWeight?: string;
  /** Letter spacing classes */
  letterSpacing?: string;
  /** Custom className for the container */
  className?: string;
  /** Callback when component is clicked */
  onClick?: () => void;
}

const CircularText: React.FC<CircularTextProps> = ({
  text = "WE DESIGN • WE DESIGN  • WE DESIGN • WE DESIGN • WE DESIGN •  WE DESIGN •",
  sizeVh = 24, // 24vh instead of 192px
  animationSpeed = 0.1,
  scrollBased = true,
  autoRotationSpeed = 0.1,
  icon: Icon = ArrowUpRight,
  iconSizeVh = 3.75, // 3.75vh instead of 30px
  iconStrokeWidth = 1.2,
  bgColor = "bg-white",
  textColor = "fill-gray-500",
  iconColor = "text-gray-600",
  shadowColor = "shadow-lg",
  textSize = "text-lg",
  fontWeight = "font-medium",
  letterSpacing = "tracking-tighter",
  className = "",
  onClick,
}) => {
  const [scrollDirection, setScrollDirection] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ size: 192, radius: 70, iconSize: 30 });

  const rotation = useMotionValue(0);

  // Calculate dimensions using vh units - only on client side
  const getVhInPixels = (vh: number) => {
    if (typeof window === 'undefined') return vh * 8; // Fallback calculation for SSR
    return (vh * window.innerHeight) / 100;
  };

  // Update dimensions when component mounts or window resizes
  useEffect(() => {
    setIsClient(true);
    
    const updateDimensions = () => {
      const size = getVhInPixels(sizeVh);
      const radius = (size - getVhInPixels(6.5)) / 2; // 6.5vh instead of 52px for padding
      const iconSize = getVhInPixels(iconSizeVh);
      
      setDimensions({ size, radius, iconSize });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [sizeVh, iconSizeVh]);

  const { size, radius, iconSize } = dimensions;
  const centerIconSize = size / 12; // Proportional center icon container
  const viewBoxSize = size;

  useEffect(() => {
    if (!isClient) return;
    
    let animationId: number;

    const animate = () => {
      if (scrollBased) {
        rotation.set(rotation.get() + animationSpeed * scrollDirection);
      } else {
        rotation.set(rotation.get() + autoRotationSpeed);
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [
    rotation,
    scrollDirection,
    animationSpeed,
    scrollBased,
    autoRotationSpeed,
    isClient,
  ]);

  useEffect(() => {
    if (!scrollBased || !isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection(1);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection(-1);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollBased, isClient]);

  const containerStyle = {
    width: `${sizeVh}vh`,
    height: `${sizeVh}vh`,
  };

  const centerIconContainerStyle = {
    width: `${sizeVh / 6}vh`, // Responsive to main size
    height: `${sizeVh / 6}vh`,
  };

  return (
    <div
      className={`relative ${bgColor} rounded-full ${shadowColor} flex items-center justify-center ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      style={containerStyle}
      onClick={onClick}
    >
      {/* Circular Text */}
      <motion.div
        className='absolute inset-0 flex items-center justify-center'
        style={{ rotate: rotation }}
      >
        <svg
          width={viewBoxSize}
          height={viewBoxSize}
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className='absolute inset-0'
        >
          <defs>
            <path
              id={`circle-${sizeVh}`}
              d={`M ${viewBoxSize / 2}, ${
                viewBoxSize / 2
              } m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
                radius * 2
              },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text
            className={`${textSize} ${fontWeight} ${textColor} ${letterSpacing}`}
          >
            <textPath href={`#circle-${sizeVh}`} startOffset='0%'>
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Icon */}
      {/* <div 
        className={`relative z-10 flex items-center justify-center ${bgColor} rounded-full`}
        style={centerIconContainerStyle}
      >
        <Icon 
          size={iconSize} 
          className={iconColor} 
          strokeWidth={iconStrokeWidth} 
        />
      </div> */}
    </div>
  );
};

export default CircularText;