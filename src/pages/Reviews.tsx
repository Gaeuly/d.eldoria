import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaUser, FaPaperPlane } from 'react-icons/fa';

interface Review {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 0,
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load reviews from localStorage
    const savedReviews = localStorage.getItem('eldoria-reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      // Default reviews
      const defaultReviews: Review[] = [
        {
          id: '1',
          name: 'Alexander Knight',
          message: 'Keluarga yang luar biasa! Suasana yang hangat dan penuh kehormatan. Bangga menjadi bagian dari Eldoria.',
          rating: 5,
          date: '2025-01-15',
        },
        {
          id: '2',
          name: 'Isabella Rose',
          message: 'Komunitas Discord terbaik yang pernah saya ikuti. Nilai-nilai keluarga yang dipegang teguh membuat tempat ini istimewa.',
          rating: 5,
          date: '2025-01-14',
        },
        {
          id: '3',
          name: 'Marcus Elder',
          message: 'Tradisi dan kehormatan yang dijaga dengan baik. Setiap anggota dihargai dan dihormati.',
          rating: 4,
          date: '2025-01-13',
        },
      ];
      setReviews(defaultReviews);
      localStorage.setItem('eldoria-reviews', JSON.stringify(defaultReviews));
    }
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
      localStorage.setItem('eldoria-reviews', JSON.stringify(updatedReviews));
      
      setFormData({ name: '', message: '', rating: 0 });
      setHoverRating(0);
      setIsSubmitting(false);
    }, 1000);
  };

  const renderStars = (rating: number, interactive = false, size = 'text-lg') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`${size} cursor-pointer transition-all duration-200 ${
              star <= (interactive ? (hoverRating || formData.rating) : rating)
                ? 'text-eldoria-gold'
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
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eldoria-black via-eldoria-black to-eldoria-black-light">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-eldoria-crimson/20 rounded-full blur-3xl animate-float"></div>
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
            Testimoni Keluarga
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dengarkan cerita dari anggota keluarga Eldoria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-eldoria-black/80 backdrop-blur-sm border-2 border-eldoria-gold/50 p-8"
          >
            <h2 className="font-fredoka text-2xl text-eldoria-gold mb-6 flex items-center gap-2">
              <FaPaperPlane />
              Kirim Testimoni
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-eldoria-black/50 border border-eldoria-gold/30 text-white focus:border-eldoria-gold focus:outline-none transition-colors duration-300"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Rating
                </label>
                {renderStars(formData.rating, true, 'text-2xl')}
                <p className="text-xs text-gray-400 mt-1">Klik untuk memberi rating</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan / Review
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-3 bg-eldoria-black/50 border border-eldoria-gold/30 text-white focus:border-eldoria-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Bagikan pengalaman Anda dengan keluarga Eldoria..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-eldoria-gold text-eldoria-black py-3 font-semibold hover:bg-eldoria-gold-light disabled:opacity-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-eldoria-black"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Kirim Testimoni
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Reviews List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar"
          >
            <AnimatePresence>
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                  }}
                  className="bg-eldoria-black/70 backdrop-blur-sm border border-eldoria-gold/50 hover:border-eldoria-gold p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-eldoria-gold/20 flex items-center justify-center">
                        <FaUser className="text-eldoria-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-eldoria-gold">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                          <span className="text-xs text-gray-400">
                            {new Date(review.date).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    "{review.message}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>

            {reviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Belum ada testimoni. Jadilah yang pertama!</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(14, 14, 14, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Reviews;