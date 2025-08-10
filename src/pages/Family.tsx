import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaCircle, FaCrown } from 'react-icons/fa';
import { familyMembers } from '../data/familyData';

interface FamilyMember {
  id: string;
  username: string;
  avatar: string;
  status: 'online' | 'offline' | 'idle' | 'dnd';
  bio: string;
  role: string;
  roleLevel: number;
  avatarDecoration?: string;
}

const Family: React.FC = () => {
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Dummy data for demonstration (replace with actual Lanyard API calls)
  const dummyMembers: FamilyMember[] = [
    {
      id: '1',
      username: 'Duke Alexander',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'online',
      bio: 'Penguasa tertinggi keluarga Eldoria',
      role: 'Duke',
      roleLevel: 5,
    },
    {
      id: '2',
      username: 'Duchess Victoria',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'idle',
      bio: 'Permaisuri yang bijaksana dan elegan',
      role: 'Duchess',
      roleLevel: 4,
    },
    {
      id: '3',
      username: 'Elder Marcus',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'online',
      bio: 'Penasihat keluarga dan penjaga tradisi',
      role: 'Elder',
      roleLevel: 3,
    },
    {
      id: '4',
      username: 'Knight Isabella',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'dnd',
      bio: 'Pelindung setia keluarga Eldoria',
      role: 'Knight',
      roleLevel: 2,
    },
    {
      id: '5',
      username: 'Peasant James',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'offline',
      bio: 'Anggota baru yang penuh semangat',
      role: 'Peasant',
      roleLevel: 1,
    },
    {
      id: '6',
      username: 'Knight Sophia',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'online',
      bio: 'Pejuang yang berani dan terhormat',
      role: 'Knight',
      roleLevel: 2,
    },
  ];

  useEffect(() => {
  const fetchMembers = async () => {
    setLoading(true);

    const updatedMembers = await Promise.all(
      familyMembers.map(async (member) => {
        try {
          const res = await fetch(`https://api.lanyard.rest/v1/users/${member.id}`);
          const json = await res.json();

          if (json.success) {
            return {
              ...member,
              username: json.data.discord_user.username,
              avatar: json.data.discord_user.avatar
                ? `https://cdn.discordapp.com/avatars/${member.id}/${json.data.discord_user.avatar}.png?size=128`
                : '',
              status: json.data.discord_status || 'offline',
              avatarDecoration: `/decorations/${member.id}.png`
            };
          }
        } catch {
          // fallback kalau error fetch
        }
        return {
          ...member,
          username: 'Unknown',
          avatar: '',
          status: 'offline',
        };
      })
    );

    // Sort by roleLevel descending
    updatedMembers.sort((a, b) => b.roleLevel - a.roleLevel);

    setMembers(updatedMembers);
    setLoading(false);
  };

  fetchMembers();
}, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-400';
      case 'idle': return 'text-yellow-400';
      case 'dnd': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRoleIcon = (role: string) => {
    if (role === 'Duke' || role === 'Duchess') return <FaCrown className="text-eldoria-gold" />;
    return null;
  };

  const handleCardClick = (member: FamilyMember) => {
    // Animate card click effect
    console.log(`Clicked on ${member.username}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-eldoria-gold mx-auto mb-4"></div>
          <p className="text-eldoria-gold text-lg">Loading Family Members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-eldoria-gold/20 rounded-full blur-3xl animate-float"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-fredoka text-5xl sm:text-6xl text-eldoria-gold mb-4">
            Keluarga Eldoria
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bertemu dengan anggota keluarga bangsawan yang terhormat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
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
                rotateX: 5,
              }}
              onClick={() => handleCardClick(member)}
              className="group bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 hover:border-eldoria-gold p-6 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.username}
                    className="w-16 h-16 object-cover border-2 border-eldoria-gold/50 group-hover:border-eldoria-gold transition-all duration-300"
                  />
                  {/* Avatar Decoration overlay */}
  {member.avatarDecoration && (
    <img
      src={member.avatarDecoration}
      alt="decoration"
      className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
    />
  )}
                  <FaCircle className={`absolute -bottom-1 -right-1 text-sm ${getStatusColor(member.status)}`} />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center gap-2">
                    {getRoleIcon(member.role)}
                    <h3 className="font-fredoka text-xl text-eldoria-gold group-hover:scale-105 transition-transform duration-300">
                      {member.username}
                    </h3>
                  </div>
                  <p className="text-eldoria-gold-light text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaDiscord className="text-eldoria-gold" />
                  <span className="text-xs text-gray-400 capitalize">
                    {member.status}
                  </span>
                </div>
                <div className="text-xs text-eldoria-gold/70">
                  Level {member.roleLevel}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-eldoria-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm">
            Status real-time melalui Discord API • Total Members: {members.length}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Family;
