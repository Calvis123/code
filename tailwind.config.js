/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#05172d',
        indigo: '#3f75ff',
        skyblue: '#68b2ff',
        softblue: '#2d5aa0',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(63, 117, 255, 0.18)',
      },
    },
  },
  plugins: [],
};
