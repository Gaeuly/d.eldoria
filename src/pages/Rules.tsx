import React from 'react';
import { motion } from 'framer-motion';
import { FaScroll, FaGavel, FaShieldAlt, FaCrown, FaEye, FaHandshake } from 'react-icons/fa';

interface Rule {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const Rules: React.FC = () => {
  const rules: Rule[] = [
    {
      icon: <FaCrown />,
      title: 'Hormati Sesama Anggota',
      description: 'Setiap anggota keluarga Eldoria berhak mendapat rasa hormat dan perlakuan yang layak',
      details: [
        'Gunakan bahasa yang sopan dan beradab dalam semua komunikasi',
        'Hindari kata-kata kasar, makian, atau ujaran kebencian',
        'Dengarkan pendapat orang lain dengan pikiran terbuka',
        'Berikan bantuan kepada anggota yang membutuhkan'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Jaga Kerahasiaan Keluarga',
      description: 'Apa yang terjadi dalam keluarga Eldoria, tetap dalam keluarga',
      details: [
        'Jangan membagikan percakapan internal kepada pihak luar',
        'Lindungi privasi dan informasi pribadi anggota lain',
        'Laporkan kepada Elder jika ada kebocoran informasi',
        'Hormati tingkat akses informasi sesuai dengan gelar masing-masing'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Dilarang Bersikap Toksik',
      description: 'Keluarga Eldoria adalah tempat yang aman dan positif untuk semua',
      details: [
        'Tidak boleh melakukan bullying atau intimidasi',
        'Hindari drama dan konflik yang tidak perlu',
        'Jangan menyebarkan gossip atau rumor yang merugikan',
        'Selesaikan masalah dengan cara yang dewasa dan bijaksana'
      ]
    },
    {
      icon: <FaGavel />,
      title: 'Patuhi Hierarki & Protokol',
      description: 'Struktur keluarga ada untuk menjaga ketertiban dan harmoni',
      details: [
        'Hormati keputusan dari Duke, Duchess, dan Elder',
        'Gunakan saluran komunikasi yang tepat sesuai topik',
        'Ikuti prosedur yang telah ditetapkan untuk berbagai kegiatan',
        'Konsultasikan masalah besar kepada pemimpin keluarga'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Jaga Estetika & Kualitas',
      description: 'Keluarga bangsawan harus mempertahankan standar yang tinggi',
      details: [
        'Gunakan avatar dan username yang pantas dan berkualitas',
        'Berpartisipasi dalam diskusi dengan konten yang bermakna',
        'Hindari spam, flood, atau pesan yang tidak berguna',
        'Bantu menjaga kerapian dan organisasi server Discord'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Kesetiaan & Dedikasi',
      description: 'Keluarga Eldoria mengharapkan komitmen dari setiap anggotanya',
      details: [
        'Prioritaskan kepentingan keluarga dalam situasi konflik',
        'Berpartisipasi aktif dalam kegiatan dan acara keluarga',
        'Berkontribusi positif untuk kemajuan dan kesuksesan bersama',
        'Jangan bergabung dengan kelompok yang bertentangan dengan nilai Eldoria'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-eldoria-crimson/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-eldoria-gold/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <FaScroll className="text-6xl text-eldoria-gold animate-float" />
          </div>
          <h1 className="font-fredoka text-5xl sm:text-6xl text-eldoria-gold mb-4">
            Kode Kehormatan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Peraturan dan nilai-nilai yang mengikat seluruh keluarga Eldoria
          </p>
        </motion.div>

        {/* Preamble */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 p-8 mb-12 text-center"
        >
          <h2 className="font-fredoka text-2xl text-eldoria-gold mb-4">
            Preamble
          </h2>
          <p className="text-gray-300 leading-relaxed italic font-serif">
            "Kami, keluarga bangsawan Eldoria, berkomitmen untuk menjunjung tinggi nilai-nilai 
            kehormatan, kesetiaan, estetika, dan kerahasiaan. Peraturan ini dibuat bukan untuk membatasi, 
            melainkan untuk melindungi dan memperkuat ikatan persaudaraan yang telah terjalin."
          </p>
        </motion.div>

        {/* Rules List */}
        <div className="space-y-8">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
              }}
              className="bg-eldoria-black/70 backdrop-blur-sm border border-eldoria-gold/50 hover:border-eldoria-gold transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-eldoria-gold text-4xl mt-2 flex-shrink-0">
                    {rule.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-fredoka text-2xl text-eldoria-gold mb-3">
                      {rule.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {rule.description}
                    </p>
                    
                    <div className="space-y-3">
                      {rule.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: detailIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-eldoria-gold rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-eldoria-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-eldoria-black/60 backdrop-blur-sm border border-eldoria-gold/50 p-8">
            <h3 className="font-fredoka text-2xl text-eldoria-gold mb-4">
              Pelanggaran & Konsekuensi
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Pelanggaran terhadap kode kehormatan ini akan ditangani secara adil oleh para Elder 
              dan pemimpin keluarga. Kami percaya pada pendekatan yang edukatif dan membangun, 
              namun tetap tegas dalam menjaga integritas keluarga.
            </p>
            <p className="text-eldoria-gold font-semibold">
              "Honor, Unity, Excellence - These are not just words, but our way of life."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rules;