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
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-red-500/10 to-crimson-700/10 rounded-full blur-3xl"
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
            <Crown className="w-16 h-16 mx-auto text-amber-400 mb-4 animate-pulse" />
            <div className="absolute -top-2 -right-2 w-4 h-4">
              <Sparkles className="w-full h-full text-amber-300 animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-tight">
                D. ELDORIA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent blur-lg opacity-50 -z-10">
                D. ELDORIA
              </div>
            </h1>
            <p className="text-3xl md:text-4xl font-light text-amber-100 tracking-widest mb-8">
              F A M I L Y
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Lebih dari sekadar grup. Kami adalah keluarga yang terikat oleh kehormatan, 
            kesetiaan, dan nilai-nilai mulia yang abadi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold text-lg rounded-none border-2 border-transparent hover:border-amber-400 hover:bg-transparent hover:text-amber-400 transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Join the Family
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-amber-400/50 text-amber-400 font-semibold text-lg hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 relative">
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Learn More
              </span>
            </button>
          </div>

          {/* Origin Story Card */}
          <div className="bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl border border-amber-400/30 p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Asal Nama</h3>
            <div className="text-lg text-gray-300 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-amber-400 font-bold text-xl">"Eldoria"</span>
                <span className="text-gray-500">=</span>
                <span className="text-amber-300 font-semibold">Elder</span>
                <span className="text-gray-500">+</span>
                <span className="text-amber-300 font-semibold">Gloria</span>
              </div>
              <p className="text-sm text-gray-400 italic">
                Menggabungkan kebijaksanaan para tetua dengan kemuliaan yang abadi
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-400 opacity-60" />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Nilai Keluarga
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empat pilar fundamental yang menjadi fondasi kekuatan dan kehormatan keluarga Eldoria
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700/50 hover:border-amber-400/50 transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{
                    transform: `translateY(${scrollY * -0.02 * (index + 1)}px)`
                  }}
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6 relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br ${pillar.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-amber-400 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-gray-400 text-center leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {pillar.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-amber-400 transition-all duration-500"></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-24 flex justify-center">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative z-10 py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-12 h-12 mx-auto text-amber-400 mb-6 opacity-60" />
          <p className="text-gray-400 text-lg">
            "Kehormatan adalah mahkota yang tidak pernah luntur"
          </p>
          <p className="text-gray-600 text-sm mt-2">
            — D. Eldoria Family
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
