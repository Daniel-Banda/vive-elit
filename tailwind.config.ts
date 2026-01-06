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
        'elite-navy': '#0F3451',
        'elite-gold': '#D5A556',
        'elite-green': '#AED0C1',
        'elite-offwhite': '#F1F1F1',
        'elite-lightgray': '#F2F1F0',
      },
      fontFamily: {
        serif: ['var(--font-josefin)', 'serif'],
        sans: ['var(--font-tenor)', 'sans-serif'],
        complementary: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;