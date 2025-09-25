import Button1 from "@/components/ui/Buttton1";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Section5 = () => {
  return (
    <div
      className='font-manrope py-[20vh]'
      style={{
        paddingInline: "clamp(16px, 4vw, 35px)",
      }}
    >
      <div className=''>
        <div
          className='grid 
  grid-cols-1 grid-rows-2 gap-[10px_0px]
  md:grid-cols-2 md:grid-rows-1 md:gap-[10px_10px]
  lg:grid-cols-3 lg:grid-rows-1 lg:gap-[10px_10px]'
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
    md:row-[1_/_2] md:col-[1_/_2]
    lg:row-[1_/_2] lg:col-[1_/_3]
    '
          >
            <div className='w-[80vh] '>
              <p className=' text-[9vh] font-bold tracking-tight leading-[9vh]'>
                Your Garden Home Specialists
              </p>
            </div>
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
    md:row-[1_/_2] md:col-[2_/_3]
    lg:row-[1_/_2] lg:col-[3_/_4]
    '
          >
            <div className=''>
              <p className=' text-[2.2vh] font-bold tracking-tight '>
                We specialize in connecting families with exceptional homes
                featuring beautiful gardens, outdoor living spaces, and premium
                landscaping. Our expert team understands the unique value of
                properties with stunning outdoor environments. Let's find your
                perfect sanctuary!
              </p>

              <Button1
                variant='secondary'
                icon={ArrowRight}
                iconPosition='right'
                className='font-manrope w-fit mt-[2vh]'
              >
                Contact Developer
              </Button1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
