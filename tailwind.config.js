/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#faf7f0',
          200: '#f5ede0',
          300: '#ede0cc',
          400: '#e0cdb0',
        },
        gold: {
          300: '#d4b896',
          400: '#c9a97a',
          500: '#b8975f',
          600: '#9e7d47',
        },
        charcoal: {
          600: '#5a5248',
          700: '#4a4239',
          800: '#3a332c',
          900: '#2a2520',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.5em',
      },
    },
  },
  plugins: [],
}
