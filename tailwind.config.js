/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          50: '#f8f5f2',
          100: '#e8e1d9',
          200: '#d4c5b5',
          300: '#b89f84',
          400: '#a07f5c',
          500: '#8b6544',
          600: '#74502f',
          700: '#5e3f26',
          800: '#4d3422',
          900: '#402c1f',
          950: '#231611',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};