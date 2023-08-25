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
        primaryWhite: "#FFECE3",
        opacityDown: "#ffffffba",
        card1: "#D6D6D8",
        card2: "#212121",
        card3: "#EFE1C7",
        card4: "#D7D7D9",
        card2_button: "#474747",
      },
    },
  },
  plugins: [],
};
export default config;
