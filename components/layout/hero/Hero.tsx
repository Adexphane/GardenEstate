import MagneticElement from "@/components/cursor/MagneticElement";
import Button1 from "@/components/ui/Buttton1";
import CircularText from "@/components/ui/CircularText";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        paddingInline: "clamp(16px, 4vw, 35px)",
      }}
      className=' font-manrope'
    >
      <div className=' flex h-[90vh] rounded-3xl py-[4vh]  px-[3vh] relative overflow-hidden'>
        {/* Background Image */}
        <Image
          src='/images/v1.jpg'
          alt='Hero background'
          fill
          className='object-cover rounded-3xl -z-10'
          priority
        />

        {/* Optional overlay for better text readability */}
        <div className='absolute inset-0 bg-black/40 rounded-3xl -z-5'></div>

        {/* Centered text - absolutely positioned */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <h1 className='text-[20vh] font-bold tracking-tight text-white/90'>
            Harmonious
          </h1>
        </div>

        {/* Your existing content */}
        <div className=' flex justify-between w-full items-end'>
          <div className=' flex gap-5'>
            <div className=' p-4 justify-between flex flex-col bg-white/20 backdrop-blur-lg rounded-2xl  border-2 border-white/10 h-[20vh] w-[60vh]'>
              <p className=' text-white/80 leading-tight'>
                Easily design and export responsive CSS Grid layouts with our
                TailwindCSS Grid Generator. Build modern web and Bento UI
                layouts in a visual Build modern .
              </p>
              <Button1
                variant='primary'
                icon={ArrowRight}
                iconPosition='right'
                className=' font-manrope w-fit'
              >
                Unlock Exclusive
              </Button1>
            </div>
            <div className=' p-4 justify-between flex flex-col bg-white/20 backdrop-blur-lg rounded-2xl  border-2 border-white/10  h-[20vh] w-[20vh]'>
              <Image
                src='/images/v1.jpg'
                alt='Hero background'
                fill
                className='object-cover p-3 rounded-4xl -z-10'
                priority
              />
            </div>
            <div className=' p-4 flex justify-between  flex-col bg-white/20 backdrop-blur-lg rounded-2xl  border-2 border-white/10  h-[20vh] w-[20vh]'>
              <p className=' leading-tight text-xl font-bold text-white/90'>
                Contact Developer
              </p>
              <Button1
                variant='primary'
                icon={Mail}
                iconPosition='right'
                className=' font-manrope'
              >
                Let Talk
              </Button1>
            </div>
          </div>
          <div className=' overflow-hidden'>
            <MagneticElement>
              <CircularText
                text='HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO • HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO •HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO •HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO WORLD • HELLO • '
                bgColor='bg-none'
                sizeVh={30}
                textColor='fill-white/90'
                textSize='text-md'
                shadowColor='shadow-none'
              />
            </MagneticElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
