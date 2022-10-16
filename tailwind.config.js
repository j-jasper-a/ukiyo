/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: "#d81159", // "#d81159"
      dark: "#2d2d2e",
      darker: "#212121",
      light: "#f7f9f9",
      transparent: "#FFFFFF00",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        bg: "url('/assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
