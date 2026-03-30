/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#08131f',
          900: '#0d1c2e',
          800: '#12263d',
          700: '#1a334f',
          600: '#254461',
        },
        ivory: {
          50:  '#faf8f3',
          100: '#f5f0e6',
          200: '#ede5d2',
          300: '#e0d5bb',
          400: '#cec09e',
        },
        brass: {
          300: '#b09a7a',
          400: '#9c8464',
          500: '#876e4e',
          600: '#72593d',
        },
        forest: {
          900: '#0e1f16',
          800: '#162a1e',
          700: '#1e3828',
        },
        wine: {
          900: '#28090f',
          800: '#3d1018',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sc:    ['Cormorant SC', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.45em',
      },
    },
  },
  plugins: [],
}
