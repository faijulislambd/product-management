/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        freeman: ["Freeman", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
