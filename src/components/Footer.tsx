'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Dr.Liao&apos;s English Hub</h3>
            <p className="max-w-md text-gray-400">
              Dedicated to helping students excel in English through innovative teaching methods
              and comprehensive learning resources.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300">dr.liao@englishhub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-300">+61 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300">Sydney, Australia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 mt-8 md:mt-0">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 text-blue-400 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr.Liao&apos;s English Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 