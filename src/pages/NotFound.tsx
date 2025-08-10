import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCrown, FaArrowLeft } from 'react-icons/fa';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-eldoria-crimson/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-eldoria-gold/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <FaCrown className="text-8xl text-eldoria-gold mx-auto mb-8 animate-glow" />
          
          <h1 className="font-fredoka text-8xl sm:text-9xl text-eldoria-gold mb-4">
            404
          </h1>
          
          <h2 className="font-fredoka text-3xl sm:text-4xl text-eldoria-gold-light mb-6">
            Halaman Tidak Ditemukan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 p-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Maaf, halaman yang Anda cari tidak dapat ditemukan di wilayah 
              <span className="text-eldoria-gold font-semibold"> Eldoria</span>.
            </p>
            
            <p className="text-gray-400 text-sm italic">
              "Even the mightiest kingdoms have uncharted territories..."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 bg-eldoria-gold text-eldoria-black px-8 py-4 font-semibold text-lg border-2 border-eldoria-gold hover:bg-transparent hover:text-eldoria-gold transition-all duration-300"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            Kembali ke Istana
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/family"
              className="text-eldoria-gold-light hover:text-eldoria-gold transition-colors duration-300 underline"
            >
              Family
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/about"
              className="text-eldoria-gold-light hover:text-eldoria-gold transition-colors duration-300 underline"
            >
              About
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/rules"
              className="text-eldoria-gold-light hover:text-eldoria-gold transition-colors duration-300 underline"
            >
              Rules
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/contact"
              className="text-eldoria-gold-light hover:text-eldoria-gold transition-colors duration-300 underline"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 text-eldoria-gold/30 text-6xl"
        >
          ⚜️
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 text-eldoria-gold/20 text-4xl"
        >
          👑
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/2 left-10 text-eldoria-crimson/30 text-5xl"
        >
          🗡️
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;