import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: {
          default: "hsl(0, 0%, 100%)",
          dimmed: "hsl(0, 0%, 95%)"
        },
        textColor: "hsl(210, 47%, 18%)",
        primary: {
          default: "hsl(28, 100%, 50%)",
          light: "rgba(255, 119, 0, .34)"
        },
        secondaryColor: "hsl(173, 83%, 54%)"
      },
      zIndex: {
        top: "9999",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
