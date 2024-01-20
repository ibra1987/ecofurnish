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
        "primary":"#FF2E63",
        "primary-light":"#5e9489",
        "secondary":"#08D9D6",
        "tertiary":"#252A34",
        "fourth":"#EAEAEA"
      }
    },
  },
  plugins: [],
}