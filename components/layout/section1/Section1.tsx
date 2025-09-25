import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+(?:\.\d+)?)/);
    const suffix = value.replace(/^(\d+(?:\.\d+)?)/, "");

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseFloat(numericMatch[1]);

    const unsubscribe = springValue.on("change", (latest) => {
      const rounded = Math.floor(latest);
      setDisplayValue(rounded + suffix);
    });

    motionValue.set(numericValue);

    return () => unsubscribe();
  }, [motionValue, springValue, value, isInView]);

  return (
    <span ref={ref} className='tabular-nums'>
      {displayValue}
    </span>
  );
};

interface StatData {
  value: string;
  suffix: string;
  label: string;
}

const Section1: React.FC = () => {
  const statsData: StatData[] = [
    { value: "350", suffix: "+", label: "Homes Sold" },
    { value: "20", suffix: "+", label: "Years Experience" },
    { value: "98", suffix: "%", label: "Client Satisfaction" },
    { value: "50", suffix: "+", label: "Garden Properties" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className='font-manrope'
      style={{
        paddingInline: "clamp(16px, 4vw, 35px)",
      }}
    >
      <div className='py-[15vh]'>
        <motion.div
          className='grid w-full gap-8 md:gap-12 lg:gap-6
                     grid-cols-1 
                     md:grid-cols-2 
                     lg:grid-cols-4'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className='p-8 rounded-lg  transition-all duration-300 '
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className='flex flex-col items-center -space-y-2 justify-center text-center'>
                <motion.p
                  className='font-bold text-[10vh] tracking-tighter text-gray-900'
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring" as const,
                    damping: 15,
                    stiffness: 200,
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "20%" }}
                    transition={{ delay: index * 0.2 + 1 }}
                  >
                    {stat.suffix}
                  </motion.span>
                </motion.p>
                <motion.p
                  className='font-semibold text-black/70  text-[2.2vh]'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "20%" }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
