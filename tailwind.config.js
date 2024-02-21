/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', "./index.html",],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {},
  },
}

