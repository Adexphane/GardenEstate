import Button1 from "@/components/ui/Buttton1";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Section3 = () => {
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
  grid-cols-1 grid-rows-2 gap-[10px_0px]
  md:grid-cols-2 md:grid-rows-1 md:gap-[10px_10px]
  lg:grid-cols-3 lg:grid-rows-1 lg:gap-[10px_10px]'
        >
          <div
            className='
    row-[1_/_2] col-[1_/_2]
    md:row-[1_/_2] md:col-[1_/_2]
    lg:row-[1_/_2] lg:col-[1_/_3]
'
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay:0.1
              }}
              viewport={{ once: true, margin: "-60px" }}
              className=' '
            >
              <p className=' text-[9vh] font-bold tracking-tight leading-[9vh]'>
                Our Operational Intelligence
              </p>
            </motion.div>
          </div>

          <div
            className='
    row-[2_/_3] col-[1_/_2]
    md:row-[1_/_2] md:col-[2_/_3]
    lg:row-[1_/_2] lg:col-[3_/_4]
'
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay:0.2
              }}
              viewport={{ once: true, margin: "-60px" }}
              className=' '
            >
              <p className=' text-[2.2vh] font-bold tracking-tight mb-[2vh]'>
                Get HTML color codes, Hex color codes, RGB, HSL and OKLCH values
                with our color pickers, color wheel, color chart and HTML color
                color chart and HTML color names. Let's go!color names. Let's
                go!
              </p>
              <p className=' text-[2.2vh] font-bold tracking-tight'>
                Get HTML color codes, Hex color codes, RGB, HSL and OKLCH values
                with our color pickers, color wheel, color chart and HTML color
                names.color wheel, color chart and HTML color names.color wheel,
                color chart and HTML color names.color wheel, color chart and
                HTML color names.
              </p>
              <p className=' text-[2.2vh] font-bold tracking-tight'>
                Get HTML color codes, Hex color codes, RGB, HSL and OKLCH values
                with our color.
              </p>
              <Button1
                variant='secondary'
                icon={ArrowRight}
                iconPosition='right'
                className='font-manrope w-fit mt-[2vh]'
              >
                Contact Developer
              </Button1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
