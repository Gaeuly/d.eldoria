import React, { useState, useEffect } from 'react';
import { Crown, Shield, Eye, Key, Star, Sparkles, ChevronDown } from 'lucide-react';

const Home = () => {
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

  const pillars = [
    {
      icon: Crown,
      title: 'Kehormatan',
      description: 'Menjunjung tinggi nilai-nilai mulia dalam setiap tindakan dan keputusan',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Kesetiaan',
      description: 'Setia kepada keluarga dan prinsip-prinsip yang kami anut selamanya',
      color: 'from-red-500 to-crimson-700'
    },
    {
      icon: Eye,
      title: 'Estetika',
      description: 'Menghargai keindahan dan kesempurnaan dalam segala aspek kehidupan',
      color: 'from-purple-500 to-indigo-700'
    },
    {
      icon: Key,
      title: 'Kerahasiaan',
      description: 'Menjaga rahasia dan kepercayaan yang telah diberikan dengan sepenuh hati',
      color: 'from-emerald-500 to-teal-700'
    },
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
              className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-20 animate-pulse"
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
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/15 to-amber-500/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Crown Symbol */}
          <div className="mb-8 relative">
            <img
  src="/assets/crown.png"
  alt="Crown"
  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 animate-pulse drop-shadow-lg max-w-full"
/>
            <div className="absolute -top-2 -right-2 w-4 h-4">
              <Sparkles className="w-full h-full text-yellow-300 animate-spin drop-shadow-sm" style={{animationDuration: '3s'}} />
            </div>
            <div className="absolute -bottom-1 -left-3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse blur-sm"></div>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
                D. ELDORIA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-lg opacity-60 -z-10">
                D. ELDORIA
              </div>
              {/* Royal shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent animate-pulse">
                D. ELDORIA
              </div>
            </h1>
            <p className="text-3xl md:text-4xl font-light text-yellow-100 tracking-widest mb-8 drop-shadow-lg">
              F A M I L Y
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Lebih dari sekadar grup. Kami adalah keluarga yang terikat oleh kehormatan, 
            kesetiaan, dan nilai-nilai mulia yang abadi.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-black font-bold text-xl border-2 border-transparent hover:border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-yellow-400/20">
              <span className="relative z-10 flex items-center gap-3">
                <Crown className="w-6 h-6" />
                Join the Family
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 opacity-75 blur-sm group-hover:opacity-0 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Origin Story Card */}
          <div className="bg-gradient-to-r from-black/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-6 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -top-1 -right-3 w-2 h-2 bg-amber-300 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Asal Nama</h3>
            <div className="text-lg text-gray-200 space-y-2">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-yellow-400 font-bold text-2xl drop-shadow-lg">"Eldoria"</span>
                <span className="text-yellow-500 font-bold">=</span>
                <span className="text-yellow-300 font-semibold bg-yellow-400/10 px-2 py-1">Elder</span>
                <span className="text-yellow-500 font-bold">+</span>
                <span className="text-yellow-300 font-semibold bg-yellow-400/10 px-2 py-1">Gloria</span>
              </div>
              <p className="text-center text-gray-300 italic leading-relaxed">
                Menggabungkan kebijaksanaan para tetua dengan kemuliaan yang abadi
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-400 opacity-60" />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                Nilai Keluarga
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-4 shadow-lg"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empat pilar fundamental yang menjadi fondasi kekuatan dan kehormatan keluarga Eldoria
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-gray-900/60 via-yellow-900/10 to-black/60 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 overflow-hidden cursor-pointer h-72"
                  style={{
                    transform: `translateY(${scrollY * -0.005 * (index + 1)}px)`
                  }}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Royal Corner Decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Icon Section */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="mb-4 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-yellow-400/30">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500"></div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-yellow-400 mb-3 text-center group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm">
                        {pillar.title}
                      </h3>
                    </div>
                    
                    {/* Description Section */}
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-gray-300 text-center leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom Royal Accent */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-20 group-hover:via-yellow-300 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Royal Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative z-10 py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-12 h-12 mx-auto text-yellow-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium">
            "Kehormatan adalah mahkota yang tidak pernah luntur"
          </p>
          <p className="text-yellow-400/80 text-sm mt-3 font-semibold tracking-wide">
            — D. Eldoria Family
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
