import React, { useState, useEffect } from 'react';
import { Crown, Shield, Users, Star, Sparkles, Circle } from 'lucide-react';
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
  joinDate?: string;
  achievements?: string[];
}

const Family = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Dummy data for demonstration
  const dummyMembers = [
    {
      id: '1',
      username: 'Duke Alexander',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'online',
      bio: 'Penguasa tertinggi keluarga Eldoria yang bijaksana dan berkarisma',
      role: 'Duke',
      roleLevel: 5,
      joinDate: '2020',
      achievements: ['Founder', 'Leader', 'Visionary']
    },
    {
      id: '2',
      username: 'Duchess Victoria',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'idle',
      bio: 'Permaisuri yang elegan dengan kebijaksanaan tak terbatas',
      role: 'Duchess',
      roleLevel: 4,
      joinDate: '2020',
      achievements: ['Co-Founder', 'Advisor', 'Diplomat']
    },
    {
      id: '3',
      username: 'Elder Marcus',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'online',
      bio: 'Penasihat keluarga dan penjaga tradisi yang dihormati',
      role: 'Elder',
      roleLevel: 3,
      joinDate: '2021',
      achievements: ['Wise Counsel', 'Tradition Keeper']
    },
    {
      id: '4',
      username: 'Knight Isabella',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'dnd',
      bio: 'Pelindung setia dengan keberanian yang tak tergoyahkan',
      role: 'Knight',
      roleLevel: 2,
      joinDate: '2022',
      achievements: ['Protector', 'Brave Heart']
    },
    {
      id: '5',
      username: 'Knight Sophia',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'online',
      bio: 'Pejuang yang berani dengan dedikasi tinggi',
      role: 'Knight',
      roleLevel: 2,
      joinDate: '2022',
      achievements: ['Warrior', 'Loyal Guardian']
    },
    {
      id: '6',
      username: 'Noble James',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=200&h=200&fit=crop&crop=face',
      status: 'offline',
      bio: 'Anggota terhormat dengan potensi besar',
      role: 'Noble',
      roleLevel: 1,
      joinDate: '2023',
      achievements: ['Rising Star']
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
                  : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200&fit=crop&crop=face',
                status: json.data.discord_status || 'offline',
                avatarDecoration: `/decorations/${member.id}.png`
              };
            }
          } catch {
            // fallback kalau error fetch
          }
          return {
            ...member,
            username: member.username || 'Unknown',
            avatar: member.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200&h=200&fit=crop&crop=face',
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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {[...Array(30)].map((_, i) => (
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
        
        <div className="text-center relative z-10">
          <div className="relative mb-6">
            <Crown className="w-16 h-16 mx-auto text-yellow-400 animate-pulse drop-shadow-lg" />
            <div className="absolute inset-0 w-16 h-16 mx-auto bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          <div className="w-20 h-20 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-400 text-xl font-semibold">Loading Family Members...</p>
        </div>
      </div>
    );
  }

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
            <Crown className="w-14 h-14 mx-auto text-yellow-400 mb-4 animate-pulse drop-shadow-lg" />
            <div className="absolute -top-1 -right-2 w-3 h-3">
              <Sparkles className="w-full h-full text-yellow-300 animate-spin drop-shadow-sm" style={{animationDuration: '4s'}} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              Keluarga Eldoria
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Keluarga Eldoria
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bertemu dengan anggota keluarga bangsawan yang terhormat dan mulia
          </p>
        </div>
      </section>

      {/* Members Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <div
                key={member.id}
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
                          src={member.avatar}
                          alt={member.username}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Avatar Decoration overlay */}
                      {member.avatarDecoration && (
                        <img
                          src={member.avatarDecoration}
                          alt="decoration"
                          className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                        />
                      )}
                      
                      {/* Status Indicator */}
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusDot(member.status)} rounded-full border-2 border-black shadow-lg animate-pulse`}></div>
                      
                      {/* Role Icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                        {getRoleIcon(member.role)}
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm">
                          {member.username}
                        </h3>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-black bg-gradient-to-r ${getRoleGradient(member.role)} shadow-lg`}>
                        {member.role} • Level {member.roleLevel}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {member.bio}
                    </p>
                  </div>

                  {/* Achievements */}
                  {member.achievements && member.achievements.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {member.achievements.map((achievement, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded border border-yellow-400/30 group-hover:bg-yellow-400/30 transition-all duration-300"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Circle className={`w-3 h-3 ${getStatusColor(member.status)}`} />
                      <span className="text-xs text-gray-400 capitalize group-hover:text-gray-300 transition-colors duration-300">
                        {member.status}
                      </span>
                    </div>
                    <div className="text-xs text-yellow-400/80 font-medium">
                      {member.joinDate ? `Since ${member.joinDate}` : 'New Member'}
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

          {/* Family Stats */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-black/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-6 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="flex justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{members.length}</div>
                  <div className="text-sm text-gray-300">Total Members</div>
                </div>
                <div className="w-px h-12 bg-yellow-400/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{members.filter(m => m.status === 'online').length}</div>
                  <div className="text-sm text-gray-300">Online Now</div>
                </div>
                <div className="w-px h-12 bg-yellow-400/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">2020</div>
                  <div className="text-sm text-gray-300">Established</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">
                  Status real-time melalui Lanyard Discord API
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-10 h-10 mx-auto text-yellow-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium italic">
            "Bersama kita berdiri, terpisah kita jatuh"
          </p>
          <p className="text-yellow-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Unity of Eldoria
          </p>
        </div>
      </section>
    </div>
  );
};

export default Family;
