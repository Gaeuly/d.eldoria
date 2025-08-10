import React, { useState, useEffect } from 'react';
import { Crown, Shield, Users, Star, Sparkles, Circle, MessageSquare, Phone, Mail } from 'lucide-react';

interface ContactPerson {
  id: string;
  name: string;
  role: string;
  roleLevel: number;
  username: string;
  avatar: string;
  description: string;
  status: 'online' | 'offline' | 'idle' | 'dnd';
  specialty: string[];
  discordId?: string;
  availability: string;
}

const Contact = () => {
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

  const contacts: ContactPerson[] = [
    {
      id: '1',
      name: 'Duke Alexander',
      role: 'Duke',
      roleLevel: 5,
      username: 'duke.alexander#0001',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Hubungi untuk masalah penting, kemitraan strategis, dan keputusan tingkat tinggi keluarga Eldoria.',
      status: 'online',
      specialty: ['Strategic Decisions', 'Partnerships', 'Leadership'],
      availability: '24/7 Emergency',
    },
    {
      id: '2',
      name: 'Duchess Victoria',
      role: 'Duchess',
      roleLevel: 4,
      username: 'duchess.victoria#0002',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Koordinasi diplomasi, hubungan eksternal, dan manajemen acara besar keluarga.',
      status: 'idle',
      specialty: ['Diplomacy', 'External Relations', 'Events'],
      availability: 'Weekdays 9AM-6PM',
    },
    {
      id: '3',
      name: 'Elder Marcus',
      role: 'Elder',
      roleLevel: 3,
      username: 'elder.marcus#0003',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Konsultasi masalah keluarga, mediasi konflik, panduan untuk anggota baru, dan penjaga tradisi.',
      status: 'online',
      specialty: ['Family Counseling', 'Conflict Resolution', 'Traditions'],
      availability: 'Daily 2PM-10PM',
    },
    {
      id: '4',
      name: 'Knight Isabella',
      role: 'Knight',
      roleLevel: 2,
      username: 'knight.isabella#0004',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Manajemen komunitas harian, koordinasi aktivitas, dan dukungan operasional anggota.',
      status: 'online',
      specialty: ['Community Management', 'Daily Operations', 'Member Support'],
      availability: 'Daily 6PM-12AM',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-400';
      case 'idle': return 'text-yellow-400';
      case 'dnd': return 'text-red-400';
      default: return 'text-gray-500';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'online': return 'bg-green-400 shadow-green-400/50';
      case 'idle': return 'bg-yellow-400 shadow-yellow-400/50';
      case 'dnd': return 'bg-red-400 shadow-red-400/50';
      default: return 'bg-gray-500';
    }
  };

  const getRoleIcon = (role) => {
    if (role === 'Duke' || role === 'Duchess') return <Crown className="text-yellow-400 w-5 h-5" />;
    if (role === 'Elder') return <Star className="text-yellow-400 w-4 h-4" />;
    if (role === 'Knight') return <Shield className="text-yellow-400 w-4 h-4" />;
    return <Users className="text-yellow-400 w-4 h-4" />;
  };

  const getRoleGradient = (role) => {
    switch (role) {
      case 'Duke':
      case 'Duchess':
        return 'from-yellow-400 via-amber-400 to-yellow-600';
      case 'Elder':
        return 'from-amber-400 via-yellow-500 to-amber-600';
      case 'Knight':
        return 'from-yellow-500 via-amber-500 to-yellow-700';
      default:
        return 'from-yellow-600 via-amber-600 to-yellow-800';
    }
  };

  const handleContactClick = (contact) => {
    // Simulate Discord contact action
    console.log(`Contacting ${contact.name} on Discord: ${contact.username}`);
    // You can add actual Discord contact logic here
  };

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
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse"
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
            left: '5%',
            top: '15%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '5%',
            bottom: '15%'
          }}
        />
      </div>

      {/* Header Section */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Crown Symbol */}
          <div className="mb-6 relative">
            <MessageSquare className="w-14 h-14 mx-auto text-yellow-400 mb-4 animate-pulse drop-shadow-lg" />
            <div className="absolute -top-1 -right-2 w-3 h-3">
              <Sparkles className="w-full h-full text-yellow-300 animate-spin drop-shadow-sm" style={{animationDuration: '4s'}} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              Hubungi Keluarga
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Hubungi Keluarga
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Terhubung langsung dengan para pemimpin dan pengelola keluarga Eldoria
          </p>

          {/* Instructions */}
          <div className="bg-gradient-to-r from-black/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-6 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Cara Menghubungi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">1</span>
                </div>
                <p className="text-gray-300 text-sm">Pilih kontak sesuai kebutuhan Anda</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">2</span>
                </div>
                <p className="text-gray-300 text-sm">Klik kartu untuk menyalin username Discord</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">3</span>
                </div>
                <p className="text-gray-300 text-sm">Kirim pesan langsung atau join server</p>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <div
                key={contact.id}
                onClick={() => handleContactClick(contact)}
                className="group relative bg-gradient-to-b from-gray-900/60 via-yellow-900/10 to-black/60 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.003 * (index + 1)}px)`
                }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Header with Avatar and Role */}
                  <div className="flex items-start mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400/50 group-hover:border-yellow-400 transition-all duration-500 group-hover:scale-105">
                        <img
                          src={contact.avatar}
                          alt={contact.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Status Indicator */}
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusDot(contact.status)} rounded-full border-2 border-black shadow-lg animate-pulse`}></div>
                      
                      {/* Role Icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                        {getRoleIcon(contact.role)}
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm">
                          {contact.name}
                        </h3>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-black bg-gradient-to-r ${getRoleGradient(contact.role)} shadow-lg mb-2`}>
                        {contact.role} • Level {contact.roleLevel}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {contact.description}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {contact.specialty.map((spec, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded border border-yellow-400/30 group-hover:bg-yellow-400/30 transition-all duration-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Discord Info */}
                  <div className="bg-black/40 border border-yellow-400/30 p-3 mb-4 group-hover:bg-black/60 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="text-yellow-400 text-lg" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-1">Discord Username</p>
                        <p className="text-yellow-400 font-mono text-sm">
                          {contact.username}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Available: <span className="text-yellow-400">{contact.availability}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Circle className={`w-3 h-3 ${getStatusColor(contact.status)}`} />
                      <span className="text-xs text-gray-400 capitalize group-hover:text-gray-300 transition-colors duration-300">
                        {contact.status}
                      </span>
                    </div>
                    <div className="text-xs text-yellow-400/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to Contact
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

          {/* Discord Server Section */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-black/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto text-yellow-400 mb-4 animate-pulse drop-shadow-lg" />
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Join Server Discord</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Bergabunglah dengan server Discord resmi keluarga Eldoria untuk komunikasi real-time dan akses langsung ke seluruh komunitas
                </p>
                
                <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-3 font-semibold hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105">
                  Join Discord Server
                </button>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">500+ Members</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Circle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Active 24/7</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">Moderated</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Phone className="w-10 h-10 mx-auto text-yellow-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium italic">
            "Komunikasi adalah kunci kekuatan keluarga"
          </p>
          <p className="text-yellow-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Eldoria Family Motto
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
