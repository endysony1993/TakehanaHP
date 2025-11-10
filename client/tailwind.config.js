/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'spin-slow': 'spin 2.5s linear infinite',
        'fade-in': 'fadeIn 1.2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
