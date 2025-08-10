import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaShieldAlt, FaStar, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
  const hierarchy = [
    {
      rank: 'Duke & Duchess',
      description: 'Penguasa tertinggi keluarga, pemimpin yang bijaksana dan terhormat',
      icon: <FaCrown />,
      level: 5,
    },
    {
      rank: 'Elder',
      description: 'Penasihat dan penjaga tradisi, dipercaya menjaga nilai-nilai keluarga',
      icon: <FaStar />,
      level: 4,
    },
    {
      rank: 'Knight',
      description: 'Pelindung keluarga yang setia, penjaga kehormatan dan keamanan',
      icon: <FaShieldAlt />,
      level: 3,
    },
    {
      rank: 'Peasant',
      description: 'Anggota baru yang penuh semangat untuk belajar dan berkontribusi',
      icon: <FaUsers />,
      level: 2,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-eldoria-gold/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-eldoria-crimson/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-fredoka text-5xl sm:text-6xl text-eldoria-gold mb-4">
            Tentang Keluarga
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sejarah, filosofi, dan struktur keluarga bangsawan Eldoria
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-fredoka text-3xl text-eldoria-gold mb-6">
                Sejarah & Cerita
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Keluarga <span className="text-eldoria-gold font-semibold">Eldoria</span> terbentuk 
                  dari visi untuk menciptakan komunitas yang lebih dari sekadar grup Discord biasa. 
                  Kami adalah keluarga yang dibangun atas fondasi <span className="text-eldoria-gold-light">kehormatan</span>, 
                  <span className="text-eldoria-gold-light"> kesetiaan</span>, dan <span className="text-eldoria-gold-light">persaudaraan</span>.
                </p>
                <p>
                  Nama "Eldoria" sendiri merupakan gabungan dari kata <span className="text-eldoria-gold">"Elder"</span> 
                  yang melambangkan kebijaksanaan para tetua, dan <span className="text-eldoria-gold">"Gloria"</span> 
                  yang berarti kemuliaan abadi. Kombinasi ini mencerminkan nilai-nilai yang kami junjung tinggi.
                </p>
                <p>
                  Setiap anggota keluarga Eldoria diperlakukan dengan hormat dan diberi kesempatan untuk 
                  berkembang sesuai dengan kemampuan dan dedikasi mereka. Kami percaya bahwa kekuatan 
                  sejati terletak pada persatuan dan saling mendukung.
                </p>
              </div>
            </div>
            <div className="bg-eldoria-black/60 backdrop-blur-sm border-2 border-eldoria-gold/50 p-8">
              <h3 className="font-fredoka text-2xl text-eldoria-gold mb-6 text-center">
                Filosofi Eldoria
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCrown className="text-eldoria-gold text-xl" />
                  <span className="text-gray-300">"Honor above all else"</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-eldoria-gold text-xl" />
                  <span className="text-gray-300">"United we stand, divided we fall"</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaStar className="text-eldoria-gold text-xl" />
                  <span className="text-gray-300">"Beauty in unity and strength"</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-eldoria-gold text-xl" />
                  <span className="text-gray-300">"Family bonds transcend all"</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hierarchy Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-fredoka text-4xl text-eldoria-gold text-center mb-12">
            Struktur Gelar
          </h2>
          
          <div className="space-y-6">
            {hierarchy.map((rank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-eldoria-black/70 backdrop-blur-sm border border-eldoria-gold/50 hover:border-eldoria-gold p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="text-eldoria-gold text-3xl">
                    {rank.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-fredoka text-2xl text-eldoria-gold">
                        {rank.rank}
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(rank.level)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-eldoria-gold rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {rank.description}
                    </p>
                  </div>
                  <div className="text-eldoria-gold/60 font-fredoka text-lg">
                    Level {rank.level}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Symbolism Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 p-12 max-w-4xl mx-auto">
            <h2 className="font-fredoka text-3xl text-eldoria-gold mb-8">
              Simbolisme & Makna
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-eldoria-gold text-4xl mb-4">⚜️</div>
                <h3 className="font-fredoka text-xl text-eldoria-gold mb-2">Lambang Keluarga</h3>
                <p className="text-gray-300 text-sm">
                  Fleur-de-lis melambangkan kemurnian, cahaya, dan kehidupan
                </p>
              </div>
              
              <div>
                <div className="text-eldoria-gold text-4xl mb-4">👑</div>
                <h3 className="font-fredoka text-xl text-eldoria-gold mb-2">Mahkota Emas</h3>
                <p className="text-gray-300 text-sm">
                  Kepemimpinan yang adil dan kebijaksanaan dalam mengambil keputusan
                </p>
              </div>
              
              <div>
                <div className="text-eldoria-gold text-4xl mb-4">🗡️</div>
                <h3 className="font-fredoka text-xl text-eldoria-gold mb-2">Pedang Kehormatan</h3>
                <p className="text-gray-300 text-sm">
                  Keberanian untuk membela kebenaran dan melindungi keluarga
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 border-t border-eldoria-gold/30">
              <p className="text-gray-300 italic leading-relaxed">
                "Dalam kegelapan, kami menjadi cahaya. Dalam kesendirian, kami menjadi keluarga. 
                Dalam ketidakpastian, kami menjadi kepastian satu sama lain."
              </p>
              <p className="text-eldoria-gold font-fredoka text-lg mt-4">
                — Motto Keluarga Eldoria
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;