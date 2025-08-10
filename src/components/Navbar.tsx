import React, { useState, useEffect } from 'react';
import {
  Crown, Menu, X, Sparkles, Shield, MessageSquare, Star, Users, Home,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Family', path: '/family', icon: Shield },
    { name: 'Reviews', path: '/reviews', icon: Star },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Rules', path: '/rules', icon: Crown },
    { name: 'Contact', path: '/contact', icon: MessageSquare },
  ];

  return (
    <>
      {/* Cursor Glow */}
      <div
        className="fixed w-4 h-4 pointer-events-none z-[100] mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0.1) 70%, transparent 100%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out',
        }}
      />

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-yellow-400/20 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}>
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {scrolled && (
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative cursor-pointer" onClick={() => setIsOpen(false)}>
              <div className="relative">
                <img
  src="/assets/crown.png"
  alt="Crown"
  className="w-10 h-10 md:w-14 md:h-14 group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
/>
                <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-full h-full text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>

              <div className="relative">
                <span className="font-bold text-xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                  D. Eldoria
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                  D. Eldoria
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                        isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        isActive ? 'opacity-50' : ''
                      }`}></div>

                      <div className="relative flex items-center space-x-2">
                        <Icon className={`w-4 h-4 transition-all duration-300 ${
                          isActive ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'
                        }`} />
                        <span className="relative">{item.name}</span>
                      </div>

                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 ${
                        isActive ? 'w-8' : 'group-hover:w-6'
                      }`}></div>

                      {isActive && (
                        <>
                          <div className="absolute top-1 left-1 w-1 h-1 border-l border-t border-yellow-400/60"></div>
                          <div className="absolute top-1 right-1 w-1 h-1 border-r border-t border-yellow-400/60"></div>
                          <div className="absolute bottom-1 left-1 w-1 h-1 border-l border-b border-yellow-400/60"></div>
                          <div className="absolute bottom-1 right-1 w-1 h-1 border-r border-b border-yellow-400/60"></div>
                        </>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 group"
              >
                <div className="absolute inset-0 bg-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-t border-yellow-400/20 relative">
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-10 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="px-4 py-6 space-y-2 relative">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group relative flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                      isActive
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.3s ease-out ${index * 0.1}s`,
                    }}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-amber-400/5 to-yellow-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Left Border Indicator */}
                    <div
                      className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-gradient-to-b from-yellow-400 to-amber-500 transition-all duration-300 ${
                        isActive ? 'h-8' : 'h-0 group-hover:h-4'
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="relative flex items-center space-x-3">
                      <Icon
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'
                        }`}
                      />
                      <span className="relative">{item.name}</span>
                    </div>

                    {/* Corner Decorations for Active */}
                    {isActive && (
                      <>
                        <div className="absolute top-1 right-2 w-2 h-2 border-r border-t border-yellow-400/40"></div>
                        <div className="absolute bottom-1 right-2 w-2 h-2 border-r border-b border-yellow-400/40"></div>
                      </>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Border */}
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          </div>
        </div>

        {/* Animated Border on Scroll */}
        {scrolled && (
          <div className="absolute inset-x-0 top-0 h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent animate-pulse"></div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
