import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const Magnetic = ({ children, strength = 0.15, className = "" }: MagneticProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const magneticRef = useRef<HTMLDivElement>(null);
  
  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouchDevice());
  }, []);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };
  
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageMouseMove = (e: MouseEvent) => {
    if (isTouchDevice) return; // Disable on touch devices
    
    if (!magneticRef.current) return;
    
    const { left, top, height, width } = magneticRef.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    
    if (isHovered) {
      const distance = { 
        x: e.clientX - center.x, 
        y: e.clientY - center.y 
      };
      
      mouse.x.set(distance.x * strength);
      mouse.y.set(distance.y * strength);
    } else {
      mouse.x.set(0);
      mouse.y.set(0);
    }
  };

  const manageMouseEnter = () => {
    if (isTouchDevice) return; // Disable on touch devices
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    if (isTouchDevice) return; // Disable on touch devices
    setIsHovered(false);
  };

  useEffect(() => {
    if (isTouchDevice) return; // Don't add listeners on touch devices
    
    const element = magneticRef.current;
    if (!element) return;

    element.addEventListener("mouseenter", manageMouseEnter);
    element.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      element.removeEventListener("mouseenter", manageMouseEnter);
      element.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered, isTouchDevice]);

  // If touch device, return children without magnetic wrapper
  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={magneticRef}
      style={{
        x: smoothMouse.x,
        y: smoothMouse.y,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;