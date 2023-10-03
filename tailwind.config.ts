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
        primary: "#2B4A33",
        secondary: "#EEEEEE",
        text: "#6B6B6B",
      },
      fontFamily: {
        fredoka: "var(--font-fredoka)",
        noto_sans: "var(--font-noto_sans)",
      },
    },
  },
  plugins: [],
};
export default config;
