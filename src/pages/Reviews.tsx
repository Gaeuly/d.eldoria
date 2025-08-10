import React, { useState, useEffect } from 'react';
import { Crown, Shield, Users, Star, Sparkles, Circle, MessageSquare, Send, User } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

const Reviews = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 0,
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    // Load reviews from state (since localStorage not available)
    const defaultReviews: Review[] = [
      {
        id: '1',
        name: 'Alexander Knight',
        message: 'Keluarga yang luar biasa! Suasana yang hangat dan penuh kehormatan. Bangga menjadi bagian dari Eldoria yang mulia ini.',
        rating: 5,
        date: '2025-01-15',
      },
      {
        id: '2',
        name: 'Isabella Rose',
        message: 'Komunitas Discord terbaik yang pernah saya ikuti. Nilai-nilai keluarga yang dipegang teguh membuat tempat ini sangat istimewa.',
        rating: 5,
        date: '2025-01-14',
      },
      {
        id: '3',
        name: 'Marcus Elder',
        message: 'Tradisi dan kehormatan yang dijaga dengan baik. Setiap anggota dihargai dan dihormati sesuai dengan prinsip keluarga.',
        rating: 4,
        date: '2025-01-13',
      },
      {
        id: '4',
        name: 'Victoria Duchess',
        message: 'Pengalaman yang tak terlupakan bersama keluarga besar Eldoria. Kebijaksanaan dan keanggunan terpancar dari setiap interaksi.',
        rating: 5,
        date: '2025-01-12',
      },
    ];
    setReviews(defaultReviews);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message || formData.rating === 0) return;

    setIsSubmitting(true);

    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      message: formData.message,
      rating: formData.rating,
      date: new Date().toISOString().split('T')[0],
    };

    setTimeout(() => {
      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      
      setFormData({ name: '', message: '', rating: 0 });
      setHoverRating(0);
      setIsSubmitting(false);
    }, 1000);
  };

  const renderStars = (rating: number, interactive = false, size = 'w-5 h-5') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} cursor-pointer transition-all duration-200 ${
              star <= (interactive ? (hoverRating || formData.rating) : rating)
                ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm'
                : 'text-gray-600'
            } ${interactive ? 'hover:scale-110' : ''}`}
            onClick={interactive ? () => setFormData(prev => ({ ...prev, rating: star })) : undefined}
            onMouseEnter={interactive ? () => setHoverRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
          />
        ))}
      </div>
    );
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
          {[...Array(35)].map((_, i) => (
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
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '5%',
            bottom: '20%'
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
              Testimoni Keluarga
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Testimoni Keluarga
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dengarkan cerita dan pengalaman dari anggota keluarga Eldoria yang terhormat
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Review Form */}
            <div className="bg-gradient-to-b from-gray-900/60 via-yellow-900/10 to-black/60 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden">
              {/* Royal Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/40"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/40"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-400 drop-shadow-sm">
                    Kirim Testimoni
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-yellow-300 mb-3">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-all duration-300 backdrop-blur-sm focus:shadow-lg focus:shadow-yellow-400/20"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-yellow-300 mb-3">
                      Rating Keluarga
                    </label>
                    {renderStars(formData.rating, true, 'w-8 h-8')}
                    <p className="text-xs text-gray-400 mt-2">Klik bintang untuk memberi rating</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-yellow-300 mb-3">
                      Pesan & Review
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm focus:shadow-lg focus:shadow-yellow-400/20"
                      placeholder="Bagikan pengalaman Anda dengan keluarga Eldoria..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-black font-bold text-lg hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-500 disabled:opacity-50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-yellow-400/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Mengirim Testimoni...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Kirim Testimoni
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6 max-h-[700px] overflow-y-auto pr-2" style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(250, 204, 21, 0.5) rgba(0, 0, 0, 0.3)'
            }}>
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="group relative bg-gradient-to-b from-gray-900/60 via-yellow-900/10 to-black/60 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `translateY(${scrollY * -0.002 * (index + 1)}px)`
                  }}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-amber-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Royal Corner Decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/40 group-hover:border-yellow-400/80 transition-all duration-500"></div>
                  
                  <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <User className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-bold text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm">
                            {review.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            {renderStars(review.rating, false, 'w-4 h-4')}
                            <span className="text-xs text-yellow-400/80 bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/20">
                              {new Date(review.date).toLocaleDateString('id-ID')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Review Message */}
                    <div className="relative">
                      <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-amber-400 to-yellow-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <p className="text-gray-300 leading-relaxed pl-4 italic group-hover:text-gray-200 transition-colors duration-300">
                        "{review.message}"
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-24 group-hover:via-yellow-300 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-400/3 animate-pulse"></div>
                  </div>
                </div>
              ))}

              {reviews.length === 0 && (
                <div className="text-center py-16 bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-lg">
                  <MessageSquare className="w-16 h-16 mx-auto text-yellow-400/50 mb-4" />
                  <p className="text-gray-400 text-lg">Belum ada testimoni.</p>
                  <p className="text-yellow-400/70 text-sm mt-1">Jadilah yang pertama berbagi pengalaman!</p>
                </div>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-black/90 via-yellow-900/20 to-black/90 backdrop-blur-xl border border-yellow-400/40 p-6 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -top-1 -right-3 w-2 h-2 bg-amber-300 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              <div className="flex justify-center items-center gap-8 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{reviews.length}</div>
                  <div className="text-sm text-gray-300">Total Reviews</div>
                </div>
                <div className="w-px h-12 bg-yellow-400/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    {reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : '0'}
                  </div>
                  <div className="text-sm text-gray-300">Avg Rating</div>
                </div>
                <div className="w-px h-12 bg-yellow-400/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{reviews.filter(r => r.rating === 5).length}</div>
                  <div className="text-sm text-gray-300">Five Stars</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                {renderStars(reviews.length > 0 ? Math.round(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length) : 0, false, 'w-6 h-6')}
              </div>
              
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-10 h-10 mx-auto text-yellow-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium italic">
            "Kepercayaan adalah dasar dari segala kehormatan"
          </p>
          <p className="text-yellow-400/80 text-sm mt-3 font-semibold tracking-wide">
            — D. Eldoria Family
          </p>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
