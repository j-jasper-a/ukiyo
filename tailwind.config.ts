import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        regular: "var(--font-regular)",
      },
    },
  },
  plugins: [],
};
export default config;
