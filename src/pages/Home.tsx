import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaShieldAlt, FaEye, FaKey } from 'react-icons/fa';

const Home: React.FC = () => {
  const pillars = [
    {
      icon: <FaCrown />,
      title: 'Kehormatan',
      description: 'Menjunjung tinggi nilai-nilai mulia dalam setiap tindakan',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Kesetiaan',
      description: 'Setia kepada keluarga dan prinsip-prinsip yang kami anut',
    },
    {
      icon: <FaEye />,
      title: 'Estetika',
      description: 'Menghargai keindahan dan kesempurnaan dalam segala hal',
    },
    {
      icon: <FaKey />,
      title: 'Kerahasiaan',
      description: 'Menjaga rahasia dan kepercayaan yang telah diberikan',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eldoria-gold/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-eldoria-crimson/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-eldoria-gold/5 rounded-full blur-2xl animate-flicker"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-fredoka text-6xl sm:text-7xl md:text-8xl text-eldoria-gold mb-4 animate-glow">
              D. Eldoria Family
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lebih dari sekadar grup. Kami adalah keluarga.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="group relative px-8 py-4 bg-eldoria-gold text-eldoria-black font-semibold text-lg border-2 border-eldoria-gold hover:bg-transparent hover:text-eldoria-gold transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Join the Family</span>
              <div className="absolute inset-0 bg-eldoria-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </motion.div>

          {/* Origin Story */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 p-6 bg-eldoria-black/50 backdrop-blur-sm border border-eldoria-gold/30"
          >
            <h3 className="font-fredoka text-2xl text-eldoria-gold mb-4">Asal Nama</h3>
            <p className="text-lg text-gray-300">
              <span className="text-eldoria-gold font-semibold">"Eldoria"</span> = 
              <span className="text-eldoria-gold-light"> Elder</span> + 
              <span className="text-eldoria-gold-light"> Gloria</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Menggabungkan kebijaksanaan para tetua dengan kemuliaan yang abadi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-fredoka text-4xl sm:text-5xl text-eldoria-gold mb-4">
              Nilai Keluarga
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Empat pilar yang menjadi fondasi kekuatan keluarga Eldoria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-eldoria-black/70 backdrop-blur-sm border border-eldoria-gold/50 p-6 hover:border-eldoria-gold transition-all duration-300 cursor-pointer"
              >
                <div className="text-eldoria-gold text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-fredoka text-xl text-eldoria-gold mb-3 text-center">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 text-center text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;