import React, { useState, useEffect } from 'react';
import { Crown, Shield, Users, Star, Sparkles, Scroll, Swords, Award } from 'lucide-react';

const About = () => {
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

  const hierarchy = [
    {
      rank: 'Duke & Duchess',
      description: 'Penguasa tertinggi keluarga, pemimpin yang bijaksana dan terhormat dengan otoritas absolut dalam mengambil keputusan penting',
      icon: <Crown className="w-8 h-8" />,
      level: 5,
      gradient: 'from-yellow-400 via-amber-400 to-yellow-600',
      color: 'text-yellow-400'
    },
    {
      rank: 'Elder',
      description: 'Penasihat dan penjaga tradisi, dipercaya menjaga nilai-nilai keluarga dengan kebijaksanaan yang telah teruji waktu',
      icon: <Star className="w-7 h-7" />,
      level: 4,
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      color: 'text-amber-400'
    },
    {
      rank: 'Knight',
      description: 'Pelindung keluarga yang setia, penjaga kehormatan dan keamanan dengan dedikasi tanpa batas',
      icon: <Shield className="w-7 h-7" />,
      level: 3,
      gradient: 'from-yellow-500 via-amber-500 to-yellow-700',
      color: 'text-yellow-500'
    },
    {
      rank: 'Noble',
      description: 'Anggota terhormat dengan potensi besar untuk naik pangkat melalui kontribusi dan kesetiaan yang konsisten',
      icon: <Users className="w-6 h-6" />,
      level: 2,
      gradient: 'from-yellow-600 via-amber-600 to-yellow-800',
      color: 'text-yellow-600'
    },
  ];

  const philosophies = [
    {
      icon: <Crown className="w-6 h-6" />,
      text: "Honor above all else",
      meaning: "Kehormatan di atas segalanya"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "United we stand, divided we fall",
      meaning: "Bersatu kita teguh, bercerai kita runtuh"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Beauty in unity and strength",
      meaning: "Keindahan dalam persatuan dan kekuatan"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Family bonds transcend all",
      meaning: "Ikatan keluarga melampaui segalanya"
    }
  ];

  const symbols = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Lambang Keluarga",
      description: "Simbol kehormatan yang melambangkan kemurnian, cahaya, dan kehidupan abadi"
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: "Mahkota Emas",
      description: "Kepemimpinan yang adil dan kebijaksanaan dalam mengambil keputusan"
    },
    {
      icon: <Swords className="w-12 h-12" />,
      title: "Pedang Kehormatan",
      description: "Keberanian untuk membela kebenaran dan melindungi keluarga"
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
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-20 animate-pulse"
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
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-amber-400/8 to-yellow-600/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Header Section */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Crown Symbol */}
          <div className="mb-6 relative">
            <Scroll className="w-14 h-14 mx-auto text-yellow-400 mb-4 animate-pulse drop-shadow-lg" />
            <div className="absolute -top-1 -right-2 w-3 h-3">
              <Sparkles className="w-full h-full text-yellow-300 animate-spin drop-shadow-sm" style={{animationDuration: '4s'}} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              Tentang Keluarga
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Tentang Keluarga
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sejarah, filosofi, dan struktur keluarga bangsawan Eldoria
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div 
              className="relative"
              style={{
                transform: `translateY(${scrollY * -0.02}px)`
              }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  Sejarah & Cerita
                </span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  Keluarga <span className="text-yellow-400 font-semibold">Eldoria</span> terbentuk 
                  dari visi untuk menciptakan komunitas yang lebih dari sekadar grup Discord biasa. 
                  Kami adalah keluarga yang dibangun atas fondasi <span className="text-yellow-300">kehormatan</span>, 
                  <span className="text-yellow-300"> kesetiaan</span>, dan <span className="text-yellow-300">persaudaraan</span>.
                </p>
                <p>
                  Nama "Eldoria" sendiri merupakan gabungan dari kata <span className="text-yellow-400 font-semibold">"Elder"</span> 
                  yang melambangkan kebijaksanaan para tetua, dan <span className="text-yellow-400 font-semibold">"Gloria"</span> 
                  yang berarti kemuliaan abadi. Kombinasi ini mencerminkan nilai-nilai yang kami junjung tinggi.
                </p>
                <p>
                  Setiap anggota keluarga Eldoria diperlakukan dengan hormat dan diberi kesempatan untuk 
                  berkembang sesuai dengan kemampuan dan dedikasi mereka. Kami percaya bahwa kekuatan 
                  sejati terletak pada persatuan dan saling mendukung.
                </p>
              </div>
            </div>
            
            <div 
              className="relative group"
              style={{
                transform: `translateY(${scrollY * 0.01}px)`
              }}
            >
              <div className="bg-gradient-to-b from-gray-900/80 via-yellow-900/20 to-black/80 backdrop-blur-xl border border-yellow-400/40 hover:border-yellow-400/70 transition-all duration-500 p-8 relative overflow-hidden">
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                
                <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center drop-shadow-lg">
                  Filosofi Eldoria
                </h3>
                
                <div className="space-y-6">
                  {philosophies.map((philosophy, index) => (
                    <div key={index} className="flex items-center gap-4 group/item hover:scale-105 transition-all duration-300">
                      <div className="text-yellow-400 group-hover/item:text-yellow-300 transition-colors duration-300">
                        {philosophy.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-300 group-hover/item:text-white transition-colors duration-300 italic">
                          "{philosophy.text}"
                        </div>
                        <div className="text-sm text-yellow-400/80 mt-1">
                          {philosophy.meaning}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hierarchy Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                Struktur Gelar
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto shadow-lg"></div>
          </div>
          
          <div className="space-y-6">
            {hierarchy.map((rank, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/70 via-yellow-900/15 to-black/70 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.001 * (index + 1)}px)`
                }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-8">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${rank.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <div className="text-black">
                          {rank.icon}
                        </div>
                      </div>
                      
                      {/* Level indicators */}
                      <div className="absolute -bottom-2 -right-2 flex gap-1">
                        {[...Array(rank.level)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg animate-pulse"
                            style={{animationDelay: `${i * 0.2}s`}}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className={`text-3xl font-bold ${rank.color} group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm`}>
                          {rank.rank}
                        </h3>
                        <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-black bg-gradient-to-r ${rank.gradient} shadow-lg`}>
                          Level {rank.level}
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {rank.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-400/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-12 max-w-5xl mx-auto relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
                Simbolisme & Makna
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {symbols.map((symbol, index) => (
                <div key={index} className="text-center group/symbol hover:scale-105 transition-all duration-500">
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover/symbol:text-yellow-300 transition-colors duration-300 drop-shadow-lg">
                    {symbol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover/symbol:text-yellow-300 transition-colors duration-300">
                    {symbol.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover/symbol:text-gray-200 transition-colors duration-300">
                    {symbol.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-yellow-400/30 pt-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-4">
                  <Crown className="w-8 h-8 mx-auto text-yellow-400 opacity-80 drop-shadow-lg" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed italic mb-6">
                  "Dalam kegelapan, kami menjadi cahaya. Dalam kesendirian, kami menjadi keluarga. 
                  Dalam ketidakpastian, kami menjadi kepastian satu sama lain."
                </p>
                <p className="text-yellow-400 text-xl font-bold tracking-wide">
                  — Motto Keluarga Eldoria
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-400/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 mx-auto text-yellow-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium">
            Keluarga Eldoria - Dimana kehormatan bertemu dengan kesetiaan
          </p>
          <p className="text-yellow-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Established 2020
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
