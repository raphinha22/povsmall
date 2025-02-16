/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ["Freehand", "serif"], 
        secondfont: ["Ubuntu", "serif"], 
      },
      colors: {
        maincolor: "#4b4b4b", 
      },
    },
  },
  plugins: [],
};
