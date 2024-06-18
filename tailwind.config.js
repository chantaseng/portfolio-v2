/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        250: '2.5',
        300: '3',
        350: '3.5',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-47%)' },
        },
      },
      animation: {
        scroll: 'scroll 5s linear forwards',
      },
    },
  },
  plugins: [],
};
