/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'eldoria': {
          black: '#0e0e0e',
          gold: '#d4af37',
          crimson: '#8b0000',
          'gold-light': '#f4e57e',
          'black-light': '#1a1a1a',
        }
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 3s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};