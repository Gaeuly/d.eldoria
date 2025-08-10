import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-eldoria-black-light border-t border-eldoria-gold/20 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span className="text-sm text-gray-300">
              © 2025 D. Eldoria Family. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">Discord:</span>
            <a
              href="#"
              className="flex items-center space-x-2 text-eldoria-gold hover:text-eldoria-gold-light transition-colors duration-300 group"
            >
              <FaDiscord className="text-lg group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">Join our Server</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 italic">
            "Lebih dari sekadar grup. Kami adalah keluarga."
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;