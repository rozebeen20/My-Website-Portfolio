/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          200: '#d5d9de',
          300: '#b0b7c0',
          400: '#848f9c',
          500: '#67727f',
          700: '#43494f',
          800: '#3a3e43',
          900: '#1a1c1f',
          950: '#0f1011',
        },
        accent: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-50%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn .6s ease-out forwards',
        'fade-up': 'fadeUp .6s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        'scale-in': 'scaleIn .3s ease-out forwards',
      },
    },
  },
  plugins: [],
}