/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 2px #fff, 0 0 5px #ffa500, 0 0 10px #ffa500, 0 0 20px #ffa500',
      },
    },
  },
  plugins: [],
}

