/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(10%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      scale: {
        '102': '1.02',
      },
      rotate: {
        '1': '1deg',
      },
    },
  },
  plugins: [],
};