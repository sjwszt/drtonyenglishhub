'use client';

import { motion } from 'framer-motion';

export default function JournalPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Journal
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-xl text-gray-600 max-w-2xl mx-auto"
        >
          <p>Journal content coming soon. This page is currently under development.</p>
        </motion.div>
      </div>
    </div>
  );
} 