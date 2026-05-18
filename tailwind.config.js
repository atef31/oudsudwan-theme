/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.twig', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'gold':        '#C9A24A',
        'gold-light':  '#E2C47A',
        'gold-dark':   '#A6842E',
        'dark-brown':  '#3A2E25',
        'ivory':       '#F5F1E8',
        'ivory-dark':  '#EDE7D5',
        'brand-black': '#000000',
        'brand-gray':  '#1A1A1A',
      },
      fontFamily: {
        'arabic':  ['Tajawal', 'sans-serif'],
        'english': ['Cormorant Garamond', 'serif'],
        'sans':    ['Tajawal', 'sans-serif'],
        'serif':   ['Cormorant Garamond', 'serif'],
        'tajawal':   ['Tajawal', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      maxWidth: {
        'screen-xl2': '1440px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24A 0%, #E2C47A 50%, #C9A24A 100%)',
        'hero-overlay':  'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
      },
      boxShadow: {
        'gold':    '0 4px 24px rgba(201,162,74,0.25)',
        'gold-lg': '0 8px 40px rgba(201,162,74,0.35)',
        'card':    '0 2px 16px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },                                  '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' },   '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
