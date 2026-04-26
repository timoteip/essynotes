import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14110d",
        forest: {
          DEFAULT: "#2b3a2c",
          dark: "#1e2a1e",
        },
        sage: "#768665",
        moss: "#495c3f",
        ivory: "#f2ead6",
        parchment: "#e6dbc1",
        cream: "#ebe2c9",
        cocoa: "#3d2a1b",
        brass: {
          DEFAULT: "#b08a50",
          light: "#c9a66b",
        },
        wine: "#4a2a22",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Times New Roman", "serif"],
        body: ["var(--font-eb-garamond)", "Georgia", "serif"],
        script: ["var(--font-italianno)", "cursive"],
      },
      animation: {
        "rise-in": "riseIn 1.2s cubic-bezier(.4,.2,.2,1) forwards",
        "fade-in": "fadeIn 1.2s cubic-bezier(.4,.2,.2,1) forwards",
        "scroll-x": "scrollX 40s linear infinite",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
