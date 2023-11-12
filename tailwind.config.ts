import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brand: "#f0cd97", // "#d81159"
      dark: "#1c1c1c",
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
        special: "var(--font-special)",
      },
    },
  },
  plugins: [],
};
export default config;
