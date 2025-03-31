'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.jpg"
          alt="English learning environment"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100 
            }}
          >
            Dr.Liao&apos;s English Hub
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering students to excel in English language and literature
          </motion.p>
          
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore Courses
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-light mb-2">Scroll Down</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 