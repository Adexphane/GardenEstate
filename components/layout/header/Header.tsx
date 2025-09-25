import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navlinks = ["Featured Homes", "Garden Properties", "Services", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        paddingInline: "clamp(16px, 4vw, 35px)",
      }}
      className='font-inter py-4'
    >
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.9,
          }}
          className='text-2xl md:text-3xl tracking-tighter font-manrope font-black'
        >
          GreenSpace
        </motion.p>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-7 tracking-tight font-semibold'>
          {navlinks.map((item) => (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 2.0,
              }}
              key={item}
              className='hover:text-gray-600 transition-colors cursor-pointer'
            >
              {item}
            </motion.p>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 2.0,
          }}
          onClick={toggleMenu}
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5'
          aria-label='Toggle menu'
        >
          <span
            className={`w-7 h-1 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-7 h-1 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu - Slide from Right */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.3,
            }}
            className='md:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white/90 shadow-2xl z-50 flex flex-col'
          >
            {/* Close Button */}
            <div className='flex justify-end p-6'>
              <button
                onClick={toggleMenu}
                className='w-8 h-8 flex items-center justify-center'
                aria-label='Close menu'
              >
                <span className='text-4xl font-light'>&times;</span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className='flex-1 px-6 pt-8'>
              {navlinks.map((item, index) => (
                <motion.p
                  key={item}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.2,
                  }}
                  className='block py-4 text-lg tracking-tight font-semibold hover:text-gray-600 transition-colors cursor-pointer border-b border-gray-100 last:border-b-0'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='md:hidden fixed inset-0 bg-black/50 backdrop-blur-lg bg-opacity-50 z-40'
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
