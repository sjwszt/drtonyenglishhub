'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Course', path: '/course' },
    { name: 'Resource', path: '/resource' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <motion.span 
                className={`font-medium text-lg relative cursor-pointer ${
                  pathname === item.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" 
                    layoutId="underline"
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </div>
        
        <Link href="/">
          <motion.div 
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dr.Liao&apos;s English Hub
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar; 