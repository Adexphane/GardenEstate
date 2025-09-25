"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trees } from "lucide-react";
import { useState, useEffect } from "react";

interface LoadingCoverProps {
  isEnabled?: boolean;
}

const LoadingCover: React.FC<LoadingCoverProps> = ({ isEnabled = true }) => {
  const [isLoading, setIsLoading] = useState(isEnabled);
  const [showCover, setShowCover] = useState(isEnabled);

  useEffect(() => {
    if (!isEnabled) {
      setIsLoading(false);
      setShowCover(false);
      return;
    }

    // Start loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [isEnabled]);

  const handleAnimationComplete = () => {
    if (!isLoading) {
      // Small delay before removing cover completely
      setTimeout(() => {
        setShowCover(false);
      }, 500);
    }
  };

  if (!showCover) return null;

  return (
    <AnimatePresence>
      {showCover && (
        <motion.div
          className='fixed inset-0 z-50 bg-neutral-900   flex items-center justify-center'
          initial={{ y: 0 }}
          animate={{
            y: isLoading ? 0 : "-100%",
          }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // Custom easing for smooth slide
            delay: isLoading ? 0 : 0.2, // Small delay before sliding up
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* Loading Animation */}
          <div className='text-center'>
            <div className='flex justify-center space-x-2 mt-4'>
              <motion.div
                className=''
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Trees size={40} className='text-white' />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingCover;
