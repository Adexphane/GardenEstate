import MagneticElement from "@/components/cursor/MagneticElement";
import Button1 from "@/components/ui/Buttton1";
import CircularText from "@/components/ui/CircularText";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Adjusted parallax values for better effect
  const circularButtonY = useTransform(scrollY, [0, 1000], [0, -150]);
  const imageParallax1 = useTransform(scrollY, [0, 800], [-100, 0]); // Changed to pixel values

  return (
    <div
      ref={containerRef}
      style={{
        paddingInline: "clamp(16px, 4vw, 35px)",
      }}
      className='font-manrope'
    >
      <div className='group flex h-[90vh] rounded-3xl py-[4vh] px-[3vh] relative overflow-hidden'>
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1.5,
          }}
          style={{ y: imageParallax1 }}
          className='absolute inset-0 w-full h-[120%]' // Made container larger for parallax movement
        >
          <Image
            src='/images/hero/v1.jpg'
            alt='Hero background'
            fill
            className='object-cover rounded-3xl'
            priority
            sizes='100vw'
          />
        </motion.div>

        {/* Optional overlay for better text readability */}
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className='absolute inset-0 bg-black/40 group-hover:bg-black/35 duration-500 transition-all rounded-3xl z-10'
        ></motion.div>

        {/* Centered text - absolutely positioned */}
        <div className='absolute overflow-hidden inset-0 flex items-center justify-center pointer-events-none z-20'>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.6,
            }}
            style={{
              fontSize: "clamp(6vh, 10vw, 30vh)",
              lineHeight: "clamp(45px, 5.5vw, 120px)",
            }}
            className='text-[20vh]  font-bold tracking-tight text-white/90'
          >
            Dream Gardens
          </motion.h1>
        </div>

        {/* Your existing content */}
        <div className='flex justify-between w-full items-end relative z-30'>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className='flex md:hidden gap-5 w-fit'
          >
            <div className='p-4 justify-between flex flex-col gap-2 bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-white/10 h-fit w-full'>
              <p className='text-white/80 leading-tight text-[2vh]'>
                Discover beautiful homes surrounded by lush gardens and outdoor
                living spaces. Your perfect sanctuary awaits with mature
                landscaping and premium outdoor amenities.
              </p>
              <Button1
                variant='primary'
                icon={ArrowRight}
                iconPosition='right'
                className='font-manrope w-fit'
              >
                Contact Developer
              </Button1>
            </div>
          </motion.div>

          <div className='hidden md:flex gap-5'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.8,
              }}
              className='p-4 justify-between flex flex-col bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-white/10 h-[20vh] w-[60vh]'
            >
              <p className='text-white/80 leading-tight text-[2vh]'>
                Discover beautiful homes surrounded by lush gardens and outdoor
                living spaces. Your perfect sanctuary awaits with mature
                landscaping and premium outdoor amenities.
              </p>
              <Button1
                variant='primary'
                icon={ArrowRight}
                iconPosition='right'
                className='font-manrope w-fit'
              >
                View Properties
              </Button1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 1.9,
              }}
              className='hidden p-4 justify-between lg:flex flex-col bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-white/10 h-[20vh] w-[20vh] relative'
            >
              <Image
                src='/images/hero/v2.jpg'
                alt='Hero background'
                fill
                className='object-cover p-3 rounded-3xl'
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 2.0,
              }}
              className='hidden p-4 xl:flex justify-between flex-col bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-white/10 h-[20vh] w-[30vh]'
            >
              <p className='leading-tight text-xl font-bold text-white/90'>
                Speak with an Agent
              </p>
              <Button1
                variant='primary'
                icon={Mail}
                iconPosition='right'
                className='font-manrope'
              >
                Let's Talk
              </Button1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{ y: circularButtonY }}
            className='hidden md:block overflow-hidden'
          >
            <MagneticElement>
              <CircularText
                text='GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • '
                bgColor='bg-none'
                sizeVh={26}
                textColor='fill-white/90'
                textSize='text-md'
                shadowColor='shadow-none'
              />
            </MagneticElement>
          </motion.div>
        </div>

        <div className='relative h-fit w-fit z-30'>
          <div className='absolute inset-0 md:hidden flex justify-end'>
            <MagneticElement>
              <CircularText
                text='GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • GARDEN HOMES • LUXURY LIVING • OUTDOOR SPACES • '
                bgColor='bg-none'
                sizeVh={26}
                textColor='fill-white/90'
                textSize='text-md'
                shadowColor='shadow-none'
                className=''
              />
            </MagneticElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
