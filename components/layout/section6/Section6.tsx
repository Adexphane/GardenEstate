import Magnetic from "@/components/cursor/MagneticElement";
import { ArrowRight } from "lucide-react";
import React, { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

// TypeScript interfaces
interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface ArticleItemProps {
  article: Article;
  index: number;
}

// Sample data - move this outside component or to a separate file
const articles: Article[] = [
  {
    id: 1,
    title: "Luxury Garden Estate - Lekki Phase 1",
    description:
      "Stunning 5-bedroom mansion with expansive manicured gardens, outdoor kitchen, and private pool. Perfect for families seeking luxury outdoor living.",
    date: "₦850M",
  },
  {
    id: 2,
    title: "Modern Family Home - Victoria Island",
    description:
      "Contemporary 4-bedroom home featuring rooftop garden, landscaped courtyards, and premium outdoor entertainment spaces.",
    date: "₦650M",
  },
  {
    id: 3,
    title: "Garden Villa - Banana Island",
    description:
      "Exclusive waterfront villa with tropical gardens, infinity pool, and panoramic views. The epitome of sophisticated outdoor living.",
    date: "₦1.2B",
  },
  {
    id: 4,
    title: "Family Sanctuary - Ikoyi Heights",
    description:
      "Spacious 6-bedroom residence with mature gardens, children's play area, and elegant outdoor dining pavilion.",
    date: "₦750M",
  },
  {
    id: 5,
    title: "Executive Retreat - Chevron Drive",
    description:
      "Modern architectural masterpiece with zen garden, outdoor office space, and sustainable landscaping features.",
    date: "₦920M",
  },
];

// Animation variants for scroll reveal
const articleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Memoized article item component
const ArticleItem = memo(({ article, index }: ArticleItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Animation triggers only once
    amount: 0.3, // Trigger when 30% of the element is visible
    margin: "0px 0px -100px 0px", // Trigger slightly before element comes into view
  });

  return (
    <motion.div
      ref={ref}
      className='relative overflow-hidden group cursor-pointer'
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      variants={articleVariants}
      style={{
        transitionDelay: `${index * 0.1}s`, // Stagger animation based on index
      }}
      whileHover='hover'
    >
      {/* Dark background that slides up on hover */}
      <motion.div
        className='absolute inset-0 bg-black'
        variants={{
          hidden: { y: "100%" },
          visible: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Content wrapper with relative positioning */}
      <div className='relative z-10'>
        <motion.div
          style={{
            paddingInline: "clamp(16px, 4vw, 35px)",
          }}
          className='flex justify-between items-start font-bold py-[2.6vh] '
          variants={{
            hidden: { color: "rgba(0, 0, 0, 0.8)" },
            visible: { color: "rgba(0, 0, 0, 0.8)" },
            hover: { color: "rgba(255, 255, 255, 0.95)" },
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className='w-[44vh] text-[2.4vh] leading-tight'>
            {article.title}
          </h3>
          <motion.p
            className='flex-1 max-w-xl mx-[4vh] text-[2.16vh] leading-relaxed'
            variants={{
              hidden: { color: "rgba(0, 0, 0, 0.7)" },
              visible: { color: "rgba(0, 0, 0, 0.7)" },
              hover: { color: "rgba(255, 255, 255, 0.8)" },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {article.description}
          </motion.p>
          <motion.time
            className='text-[2.4vh] whitespace-nowrap'
            dateTime={article.date}
            variants={{
              hidden: { color: "rgba(0, 0, 0, 0.8)" },
              visible: { color: "rgba(0, 0, 0, 0.8)" },
              hover: { color: "rgba(255, 255, 255, 0.95)" },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {article.date}
          </motion.time>
          <Magnetic strength={0.3}>
            <motion.button
              className='ml-4 w-[6.5vh] h-[6.5vh] -rotate-45 rounded-full p-[1vh] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20'
              aria-label={`Read article: ${article.title}`}
              variants={{
                hidden: {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
                visible: {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
                hover: {
                  backgroundColor: "#ffffff",
                },
              }}
              transition={{ duration: 0.0 }}
            >
              <motion.div
                variants={{
                  hidden: { color: "rgba(0, 0, 0, 0.8)" },
                  visible: { color: "rgba(0, 0, 0, 0.8)" },
                  hover: { color: "#000000" },
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ArrowRight className='w-full h-full' />
              </motion.div>
            </motion.button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Border line */}
      <motion.hr
        className='border-black/50 mx-4'
        variants={{
          hidden: { borderColor: "rgba(0, 0, 0, 0.1)" },
          visible: { borderColor: "rgba(0, 0, 0, 0.1)" },
          hover: { borderColor: "rgba(255, 255, 255, 0.2)" },
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.div>
  );
});

ArticleItem.displayName = "ArticleItem";

const Section6 = memo(() => {
  return (
    <section className='font-manrope py-[21vh]' aria-label='Recent Articles'>
      <p
        style={{
          paddingInline: "clamp(16px, 4vw, 35px)",
        }}
        className='text-[9vh] font-bold tracking-tight mb-[4vh] leading-[9vh]'
      >
        Featured Properties
      </p>
      <div className='mx-auto'>
        <div className='divide-y divide-transparent'>
          {articles.map((article, index) => (
            <ArticleItem key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Section6.displayName = "Section6";

export default Section6;
