/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cBlue: '#2b6777',
        cGreen: '#52ab98',
        cBlack: '1c1a1a'
      }
    },
  },
  plugins: [],
}
