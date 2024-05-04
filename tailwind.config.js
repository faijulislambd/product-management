/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neuOr: "10px 10px 20px 0 rgba(0,0,0,.25), -10px -10px 20px 0 #ffaa33",
        neuGrInner:
          "inset 5px 5px 8px 0 rgba(0,0,0,.25),inset -5px -5px 8px 0 #fff",
        neuGr: "10px 10px 20px 0 rgba(0,0,0,.25), -10px -10px 20px 0 #ffffff",
      },
    },
  },
  plugins: [],
};
