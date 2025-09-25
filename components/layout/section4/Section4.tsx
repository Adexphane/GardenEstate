import Button1 from "@/components/ui/Buttton1";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Section4 = () => {
  return (
    <div
      className='font-manrope py-[10vh]'
      style={{
        paddingInline: "clamp(16px, 4vw, 35px)",
      }}
    >
      <div className=''>
        <div
          className='grid 
  grid-cols-1 grid-rows-3 gap-[10px_0px]
  md:grid-cols-2 md:grid-rows-2 md:gap-[10px_10px]
  lg:grid-cols-3 lg:grid-rows-2 lg:gap-[15px_15px]'
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.1,
            }}
            viewport={{ once: true, margin: "-60px" }}
            className='
    row-[1_/_2] col-[1_/_2]
    md:row-[1_/_2] md:col-[1_/_3]
    lg:row-[1_/_3] lg:col-[1_/_3]
    rounded-3xl relative group'
          >
            <div
              className='absolute inset-0 w-full -z-10 ' // Made container larger for parallax movement
            >
              <Image
                src='/images/section4/v1.jpg'
                alt='Hero background'
                fill
                className='object-cover rounded-3xl '
                priority
                sizes='100vw'
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:bg-black/5 duration-500 transition-all rounded-3xl -z-10'
            />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className='flex flex-col justify-between h-full p-[4vh]'
            >
              <Button1
                variant='outline2'
                size='sm'
                className='font-manrope w-fit '
              >
                Premium Properties
              </Button1>

              <div className=' w-[80vh] '>
                <p className=' text-[10vh] text-white leading-[4.5vh] font-bold tracking-tight '>
                  Dream Gardens
                </p>{" "}
                <p className=' text-[2.2vh] text-white/90 font-bold tracking-tight mt-[4vh]'>
                  Discover luxury homes surrounded by meticulously designed
                  gardens and outdoor living spaces. Each property features
                  mature landscaping, private patios, and premium outdoor
                  amenities for the perfect lifestyle.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            viewport={{ once: true, margin: "-60px" }}
            className='
    row-[2_/_3] col-[1_/_2]
    md:row-[2_/_3] md:col-[1_/_2]
    lg:row-[1_/_2] lg:col-[3_/_4]
     rounded-3xl relative group'
          >
            <div
              className='absolute inset-0 w-full -z-10 h-[]' // Made container larger for parallax movement
            >
              <Image
                src='/images/section4/v2.jpg'
                alt='Hero background'
                fill
                className='object-cover rounded-3xl '
                priority
                sizes='100vw'
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:bg-black/10 duration-500 transition-all rounded-3xl -z-10'
            />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className='flex flex-col justify-between h-[40vh] p-[4vh]'
            >
              <Button1
                variant='outline2'
                size='sm'
                className='font-manrope w-fit'
              >
                Summer Environments
              </Button1>
              <p className=' text-[2.2vh] text-white/90 font-bold tracking-tight mt-[2vh]'>
                Expert guidance in finding homes with exceptional outdoor spaces
                and garden features that match your lifestyle.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className='
    row-[3_/_4] col-[1_/_2]
    md:row-[2_/_3] md:col-[2_/_3]
    lg:row-[2_/_3] lg:col-[3_/_4]
     rounded-3xl as'
          >
            <div className='flex flex-col justify-between h-[40vh] p-[4vh]'>
              <div className=''>
                <Button1
                  variant='outline'
                  size='sm'
                  className='font-manrope w-fit'
                >
                  Much more
                </Button1>
                <p className=' text-[2.2vh]  font-bold tracking-tight mt-[1vh]'>
                  Transform your lifestyle with homes featuring stunning garden
                  views, outdoor kitchens, and entertainment spaces.
                </p>
              </div>
              <p className=' text-[9vh] mb-[1vh] leading-[4.5vh] font-bold tracking-tight '>
                Green space
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
