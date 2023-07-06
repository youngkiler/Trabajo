/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "playfair-display":['Playfair Display', 'serif']
      },
      backgroundImage:{
        "header":"url('/src/img/fruitsbg.jpg')"
      }
    },
  },
  plugins: [],
}
