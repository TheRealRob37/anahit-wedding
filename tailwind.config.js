/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#160408',
          900: '#27070f',
          800: '#3d0d18',
          700: '#561324',
          600: '#6e1930',
        },
        cream: {
          50:  '#fdfaf5',
          100: '#f9f3ea',
          200: '#f2e8d5',
          300: '#e8d8bc',
        },
        gold: {
          300: '#dcc9a0',
          400: '#c9a97a',
          500: '#b8935a',
          600: '#9e7a42',
        },
        rose: {
          100: '#f5e4e4',
          200: '#edc9c9',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sc:     ['Cormorant SC', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
        sans:   ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.45em',
      },
    },
  },
  plugins: [],
}
