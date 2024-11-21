import type { Config } from "tailwindcss";

export default {
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
      xl: "1440px"
    },
    extend: {
      colors: {
        background: "#fff",
        foreground: "#555"
      },
      zIndex: {
        "top": "9999",
      }
    },
  },
  rules: [
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
  ],
  plugins: [],
} satisfies Config;
