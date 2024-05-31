import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px', // Celulares pantalla muy chica
        'sm': '400px', // Celulares
        'md': '768px', // Celulares Horizontal y Tablet Vertical
        'lg': '1024px', // Tablet Horizontal y Laptops
        'xl': '1280px', // Laptops y escritorios chicos
        '2xl': '1536px', // Escritorios grandes
        },
      colors:{
        firstColor: '#2C4996',
        secondColor: '#242754',
        thirdColor: '#A5B4CD',
        fourthColor: '#EFE9DA',
        bkgColor: '#f3f3f3'
      }
    },
  },
  plugins: [],
};
export default config;
