import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E34",   // Cokelat Figma
        secondary: "#D4A373", // Emas Figma
        cream: "#FFFDF5",     // Background Figma
      },
    },
  },
  plugins: [],
};
export default config;