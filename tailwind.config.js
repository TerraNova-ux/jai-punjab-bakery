/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF8',
          100: '#FFF6E8',
          200: '#FBEACB',
          300: '#F4D9A8',
        },
        chocolate: {
          400: '#5E4034',
          500: '#4A3027',
          600: '#38221B',
          700: '#2A1812',
          800: '#1C0F0A',
        },
        caramel: {
          300: '#E0A878',
          400: '#D49259',
          500: '#C47A43',
          600: '#A8633A',
          700: '#8A4F2E',
        },
        berry: {
          400: '#C45064',
          500: '#A83246',
          600: '#8C2638',
          700: '#6F1C2B',
        },
        pistachio: {
          300: '#A4B68A',
          400: '#8B9A67',
          500: '#748854',
          600: '#5C6E43',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(56, 34, 27, 0.18)',
        card: '0 12px 40px -12px rgba(56, 34, 27, 0.22)',
        glow: '0 0 0 1px rgba(196, 122, 67, 0.15), 0 8px 30px -10px rgba(196, 122, 67, 0.3)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
