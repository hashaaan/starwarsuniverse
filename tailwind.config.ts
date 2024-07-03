import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        space: ["var(--font-space)"],
        sofia: ["var(--font-sofia)"],
      },
      colors: {
        primary: "#4691F2",
        secondary: "#1A1313",
        gray: {
          1: "#333333",
          2: "#5B5B5B",
          3: "#6C6C6C",
          4: "#C4C4C4",
          5: "#E0E0E0",
        },
      },
      fontSize: {
        h1: "64px",
        h2: "48px",
        h3: "36px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
