import React, { useState, useEffect } from 'react';
import { Crown, MessageSquare, Heart, Sparkles, Shield, Star, Users } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const footerLinks = [
    { name: 'Family Rules', href: '#', icon: Crown },
    { name: 'Join Discord', href: '#', icon: MessageSquare },
    { name: 'Contact Us', href: '#', icon: Users },
  ];

  const socialStats = [
    { label: 'Active Members', value: '500+', icon: Users },
    { label: 'Years Strong', value: '5+', icon: Shield },
    { label: 'Daily Active', value: '100+', icon: Star },
  ];

  return (
    <footer className="relative bg-black border-t border-yellow-400/20 overflow-hidden">
      {/* Dynamic Cursor Effect */}
      <div 
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0.1) 70%, transparent 100%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-amber-400/8 to-yellow-600/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse drop-shadow-lg" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Keluarga Eldoria
            </h3>
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse drop-shadow-lg" />
          </div>
          
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          
          <p className="text-gray-300 text-lg italic max-w-2xl mx-auto">
            "Lebih dari sekadar grup. Kami adalah keluarga yang bersatu dalam kehormatan dan kebanggaan."
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-gradient-to-b from-gray-900/60 via-yellow-900/10 to-black/60 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 overflow-hidden cursor-pointer p-6 text-center"
              >
                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <Icon className="w-8 h-8 mx-auto text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {footerLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-400">
              © 2025 <span className="text-yellow-400 font-semibold">D. Eldoria Family</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Established in 2020 • Built with gaeuly and D.Eldoria
            </p>
          </div>

          {/* Discord Section */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Join our community:</span>
            <a
              href="#"
              className="group flex items-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30 hover:border-yellow-400/70 px-4 py-2 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <div className="text-sm font-semibold text-yellow-400">Discord Server</div>
                <div className="text-xs text-gray-400">Click to join</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center py-6 border-t border-yellow-400/20">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Heart className="w-4 h-4 text-yellow-400 animate-pulse" />
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <Heart className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-200 font-medium italic mb-2">
            "Bersama kita berdiri, terpisah kita jatuh"
          </p>
          <p className="text-yellow-400/80 text-sm font-semibold tracking-wide">
            — Unity of Eldoria
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-8 mt-6 opacity-50">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
