import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "Arial", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        ink: "#070b12",
        panel: "#0d1320",
        steel: "#111827",
        signalRed: "#ef233c",
        signalBlue: "#2563eb",
        ice: "#e7eefb",
      },
      boxShadow: {
        glow: "0 0 45px rgba(37, 99, 235, 0.28)",
        redglow: "0 0 36px rgba(239, 35, 60, 0.24)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shine: "shine 8s linear infinite",
        rise: "rise 0.85s ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
