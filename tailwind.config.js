/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50:  '#faf7f2',
          100: '#f4ede0',
          200: '#e8dfd0',
          300: '#d4c8b2',
          400: '#bfaf94',
        },
        olive: {
          600: '#5a5340',
          700: '#4a4535',
          800: '#3a3627',
          900: '#2b281b',
          950: '#1a1810',
        },
      },
      fontFamily: {
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Oswald', 'sans-serif'],
        script:  ['Great Vibes', 'cursive'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra:  '0.35em',
      },
    },
  },
  plugins: [],
}
