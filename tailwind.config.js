/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.twig',
    './src/assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gold:        '#C9A24A',
        'gold-light':'#E2C47A',
        'gold-dark': '#A6842E',
        'dark-brown':'#3A2E25',
        ivory:       '#F5F1E8',
        'ivory-dark':'#EDE7D5',
        'brand-black':'#000000',
        'brand-gray': '#1A1A1A',
        'brand-gray-mid': '#2D2D2D',
        'text-muted': '#888888',
      },
      fontFamily: {
        tajawal:   ['Tajawal', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:      ['Tajawal', 'sans-serif'],
        serif:     ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero-ar':  ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'hero-en':  ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'section':  ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '100': '25rem',
        '120': '30rem',
      },
      maxWidth: {
        'screen-xl2': '1440px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24A 0%, #E2C47A 50%, #C9A24A 100%)',
        'dark-gradient': 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)',
        'hero-overlay':  'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
      },
      boxShadow: {
        'gold':    '0 4px 24px rgba(201,162,74,0.25)',
        'gold-lg': '0 8px 40px rgba(201,162,74,0.35)',
        'card':    '0 2px 16px rgba(0,0,0,0.12)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.2)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in':   'fadeIn 0.6s ease forwards',
        'slide-up':  'slideUp 0.7s ease forwards',
        'shimmer':   'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:  { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer:  { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
