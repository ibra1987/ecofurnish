/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "primary":"#43766C",
        "primary-light":"#5e9489",
        "secondary":"#F8FAE5",
        "tertiary":"#B19470",
        "fourth":"#76453B"
      }
    },
  },
  plugins: [],
}