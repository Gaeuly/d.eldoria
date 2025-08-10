import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaCrown, FaShieldAlt, FaStar } from 'react-icons/fa';

interface ContactPerson {
  name: string;
  role: string;
  username: string;
  avatar: string;
  description: string;
  roleIcon: React.ReactNode;
  status: 'online' | 'offline' | 'idle';
}

const Contact: React.FC = () => {
  const contacts: ContactPerson[] = [
    {
      name: 'Duke Alexander',
      role: 'Supreme Leader',
      username: 'duke.alexander#0001',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Hubungi untuk masalah penting, kemitraan, atau keputusan strategis keluarga.',
      roleIcon: <FaCrown />,
      status: 'online',
    },
    {
      name: 'Elder Marcus',
      role: 'Family Counselor',
      username: 'elder.marcus#0002',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Konsultasi masalah keluarga, mediasi konflik, dan panduan untuk anggota baru.',
      roleIcon: <FaStar />,
      status: 'idle',
    },
    {
      name: 'Knight Isabella',
      role: 'Community Manager',
      username: 'knight.isabella#0003',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Koordinasi acara, manajemen komunitas, dan aktivitas harian keluarga.',
      roleIcon: <FaShieldAlt />,
      status: 'online',
    },
    {
      name: 'Elder Victoria',
      role: 'Recruitment Officer',
      username: 'elder.victoria#0004',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop&crop=face',
      description: 'Proses rekrutment anggota baru dan orientasi keluarga Eldoria.',
      roleIcon: <FaStar />,
      status: 'online',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'idle': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  };

  const handleCardClick = (contact: ContactPerson) => {
    // Simulate Discord contact action
    console.log(`Contacting ${contact.name} on Discord`);
  };

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-eldoria-gold/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-eldoria-crimson/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
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
            Hubungi Keluarga
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Terhubung langsung dengan para pemimpin dan pengelola keluarga Eldoria
          </p>
          
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <FaDiscord className="text-2xl text-eldoria-gold" />
            <span>Komunikasi melalui Discord</span>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 p-8 mb-12 text-center"
        >
          <h2 className="font-fredoka text-2xl text-eldoria-gold mb-4">
            Cara Menghubungi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="text-eldoria-gold text-xl mb-2">1.</div>
              <p className="text-sm">Klik kartu kontak yang sesuai dengan kebutuhan Anda</p>
            </div>
            <div>
              <div className="text-eldoria-gold text-xl mb-2">2.</div>
              <p className="text-sm">Salin username Discord dan kirim pesan langsung</p>
            </div>
            <div>
              <div className="text-eldoria-gold text-xl mb-2">3.</div>
              <p className="text-sm">Atau join server Discord keluarga untuk chat grup</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
              }}
              whileTap={{
                scale: 0.95,
                rotateY: 5,
                rotateX: 2,
              }}
              onClick={() => handleCardClick(contact)}
              className="group bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 hover:border-eldoria-gold p-8 cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-16 h-16 object-cover border-2 border-eldoria-gold/50 group-hover:border-eldoria-gold transition-all duration-300"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-eldoria-black ${getStatusColor(contact.status)}`}></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-eldoria-gold text-lg">
                      {contact.roleIcon}
                    </span>
                    <h3 className="font-fredoka text-xl text-eldoria-gold group-hover:scale-105 transition-transform duration-300">
                      {contact.name}
                    </h3>
                  </div>
                  <p className="text-eldoria-gold-light text-sm font-semibold">
                    {contact.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {contact.description}
              </p>

              {/* Discord Info */}
              <div className="bg-eldoria-black/50 border border-eldoria-gold/30 p-4">
                <div className="flex items-center gap-3">
                  <FaDiscord className="text-eldoria-gold text-xl" />
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Discord Username</p>
                    <p className="text-eldoria-gold-light font-mono text-sm">
                      {contact.username}
                    </p>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-gray-400">
                  Status: <span className={`capitalize ${contact.status === 'online' ? 'text-green-400' : contact.status === 'idle' ? 'text-yellow-400' : 'text-gray-400'}`}>
                    {contact.status}
                  </span>
                </div>
              </div>

              {/* Click hint */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-eldoria-gold/70">Click to contact</span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-eldoria-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Click animation effect */}
              <motion.div
                className="absolute inset-0 bg-eldoria-gold/10 opacity-0"
                whileTap={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Discord Server Invite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-eldoria-black/60 backdrop-blur-sm border border-eldoria-gold/50 p-8 max-w-2xl mx-auto">
            <FaDiscord className="text-5xl text-eldoria-gold mx-auto mb-4" />
            <h3 className="font-fredoka text-2xl text-eldoria-gold mb-4">
              Join Server Discord
            </h3>
            <p className="text-gray-300 mb-6">
              Bergabunglah dengan server Discord resmi keluarga Eldoria untuk komunikasi real-time
            </p>
            <button className="bg-eldoria-gold text-eldoria-black px-8 py-3 font-semibold hover:bg-eldoria-gold-light transition-colors duration-300">
              Join Discord Server
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;