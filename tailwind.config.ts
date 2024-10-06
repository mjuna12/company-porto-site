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
        'offWhite': '#FDF7F1',
        'orange': '#EE6451',
        'lightDark': '#111235',
        'cream': '#B9E1D7',
        'teal': '#538074'
      },
      screens: {
        'sm': '576px',  // Small devices (like small tablets)
        'md': '768px',  // Medium devices (like tablets or smaller laptops)
        'lg': '992px',  // Large devices (like laptops or larger tablets)
        'xl': '1200px', // Extra-large devices (like desktops)
        'xxl': '1600px' // 2x Extra-large devices (like large monitors)
      }
    },
  },
  plugins: [],
};
export default config;
