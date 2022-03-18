/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        facebook: '#4867AA',
        linkedin: '#0A66C2',
        github: '#161B22',
        gitlab: '#F56A25',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
        playFair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        fadein: {
          '0%, 50%': {
            opacity: 0,
            transform: 'translate(0, -52px)',
          },
          '100%': {
            opacity: 0.99,
            transform: 'translate(0, 0)',
          },
        },
        fadeinTimeLine: {
          '0%, 67%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0.99,
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        fadein: 'fadein 0.8s linear 1',
        'fadein-timeline': 'fadeinTimeLine 1.25s linear',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
