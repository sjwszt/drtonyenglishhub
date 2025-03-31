'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) => {
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            <motion.button
              className="mt-8 inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 