import React, { useState, useEffect } from 'react';
import { Crown, Shield, Users, Star, Sparkles, Scroll, Eye, Handshake, Gavel, Scale } from 'lucide-react';

const Rules = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rules = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Hormati Sesama Anggota',
      description: 'Setiap anggota keluarga Eldoria berhak mendapat rasa hormat dan perlakuan yang layak',
      details: [
        'Gunakan bahasa yang sopan dan beradab dalam semua komunikasi',
        'Hindari kata-kata kasar, makian, atau ujaran kebencian',
        'Dengarkan pendapat orang lain dengan pikiran terbuka',
        'Berikan bantuan kepada anggota yang membutuhkan'
      ],
      gradient: 'from-yellow-400 via-amber-400 to-yellow-600',
      color: 'text-yellow-400'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Jaga Kerahasiaan Keluarga',
      description: 'Apa yang terjadi dalam keluarga Eldoria, tetap dalam keluarga',
      details: [
        'Jangan membagikan percakapan internal kepada pihak luar',
        'Lindungi privasi dan informasi pribadi anggota lain',
        'Laporkan kepada Elder jika ada kebocoran informasi',
        'Hormati tingkat akses informasi sesuai dengan gelar masing-masing'
      ],
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      color: 'text-amber-400'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Dilarang Bersikap Toksik',
      description: 'Keluarga Eldoria adalah tempat yang aman dan positif untuk semua',
      details: [
        'Tidak boleh melakukan bullying atau intimidasi',
        'Hindari drama dan konflik yang tidak perlu',
        'Jangan menyebarkan gossip atau rumor yang merugikan',
        'Selesaikan masalah dengan cara yang dewasa dan bijaksana'
      ],
      gradient: 'from-yellow-500 via-amber-500 to-yellow-700',
      color: 'text-yellow-500'
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: 'Patuhi Hierarki & Protokol',
      description: 'Struktur keluarga ada untuk menjaga ketertiban dan harmoni',
      details: [
        'Hormati keputusan dari Duke, Duchess, dan Elder',
        'Gunakan saluran komunikasi yang tepat sesuai topik',
        'Ikuti prosedur yang telah ditetapkan untuk berbagai kegiatan',
        'Konsultasikan masalah besar kepada pemimpin keluarga'
      ],
      gradient: 'from-yellow-600 via-amber-600 to-yellow-800',
      color: 'text-yellow-600'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Jaga Estetika & Kualitas',
      description: 'Keluarga bangsawan harus mempertahankan standar yang tinggi',
      details: [
        'Gunakan avatar dan username yang pantas dan berkualitas',
        'Berpartisipasi dalam diskusi dengan konten yang bermakna',
        'Hindari spam, flood, atau pesan yang tidak berguna',
        'Bantu menjaga kerapian dan organisasi server Discord'
      ],
      gradient: 'from-amber-500 via-yellow-600 to-amber-700',
      color: 'text-amber-500'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Kesetiaan & Dedikasi',
      description: 'Keluarga Eldoria mengharapkan komitmen dari setiap anggotanya',
      details: [
        'Prioritaskan kepentingan keluarga dalam situasi konflik',
        'Berpartisipasi aktif dalam kegiatan dan acara keluarga',
        'Berkontribusi positif untuk kemajuan dan kesuksesan bersama',
        'Jangan bergabung dengan kelompok yang bertentangan dengan nilai Eldoria'
      ],
      gradient: 'from-yellow-700 via-amber-700 to-yellow-900',
      color: 'text-yellow-700'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Cursor Effect */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0.2) 70%, transparent 100%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(45)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-25 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-red-400/8 to-amber-500/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            right: '15%',
            top: '25%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-yellow-400/6 to-amber-600/6 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            left: '15%',
            bottom: '25%'
          }}
        />
      </div>

      {/* Header Section */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Scroll Symbol */}
          <div className="mb-6 relative">
            <Scroll className="w-14 h-14 mx-auto text-yellow-400 mb-4 animate-pulse drop-shadow-lg" />
            <div className="absolute -top-1 -right-2 w-3 h-3">
              <Sparkles className="w-full h-full text-yellow-300 animate-spin drop-shadow-sm" style={{animationDuration: '4s'}} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              Kode Kehormatan
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Kode Kehormatan
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Peraturan dan nilai-nilai yang mengikat seluruh keluarga Eldoria
          </p>
        </div>
      </section>

      {/* Preamble Section */}
      <section className="relative z-10 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-gradient-to-b from-gray-900/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-8 mb-12 relative overflow-hidden group"
            style={{
              transform: `translateY(${scrollY * -0.01}px)`
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            
            {/* Royal Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
            
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 drop-shadow-lg">
                Preamble
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed italic max-w-4xl mx-auto">
                "Kami, keluarga bangsawan Eldoria, berkomitmen untuk menjunjung tinggi nilai-nilai 
                kehormatan, kesetiaan, estetika, dan kerahasiaan. Peraturan ini dibuat bukan untuk membatasi, 
                melainkan untuk melindungi dan memperkuat ikatan persaudaraan yang telah terjalin."
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-400/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/70 via-yellow-900/10 to-black/70 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.002 * (index + 1)}px)`
                }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 via-amber-400/3 to-yellow-600/3 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${rule.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <div className="text-black">
                          {rule.icon}
                        </div>
                      </div>
                      
                      {/* Number indicator */}
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-black text-xs font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-3xl font-bold ${rule.color} group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm mb-4`}>
                        {rule.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6">
                        {rule.description}
                      </p>
                      
                      {/* Rule Details */}
                      <div className="space-y-3">
                        {rule.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3 group/detail hover:scale-105 transition-all duration-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-lg group-hover/detail:bg-yellow-300 transition-colors duration-300"></div>
                            <p className="text-gray-400 leading-relaxed group-hover/detail:text-gray-300 transition-colors duration-300">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/2 via-transparent to-amber-400/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Message Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900/90 via-red-900/20 to-black/90 backdrop-blur-xl border border-red-400/40 hover:border-red-400/70 transition-all duration-500 p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            
            {/* Royal Corner Decorations - Red theme for consequences */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-red-400/40 group-hover:border-red-400/80 transition-all duration-500"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-red-400/40 group-hover:border-red-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-red-400/40 group-hover:border-red-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-red-400/40 group-hover:border-red-400/80 transition-all duration-500"></div>
            
            <div className="text-center relative z-10">
              <div className="mb-6">
                <Scale className="w-12 h-12 mx-auto text-red-400 drop-shadow-lg" />
              </div>
              <h3 className="text-3xl font-bold text-red-400 mb-6 drop-shadow-lg">
                Pelanggaran & Konsekuensi
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 mx-auto mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
                Pelanggaran terhadap kode kehormatan ini akan ditangani secara adil oleh para Elder 
                dan pemimpin keluarga. Kami percaya pada pendekatan yang edukatif dan membangun, 
                namun tetap tegas dalam menjaga integritas keluarga.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent text-xl font-bold italic">
                "Honor, Unity, Excellence - These are not just words, but our way of life."
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-400/3 via-transparent to-red-500/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Scroll className="w-10 h-10 mx-auto text-yellow-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium">
            "Kehormatan adalah harta yang tak ternilai, jaga dengan segenap jiwa"
          </p>
          <p className="text-yellow-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Keluarga Eldoria Code of Honor
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rules;
