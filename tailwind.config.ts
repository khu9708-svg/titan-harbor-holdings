import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titan: {
          black: "#03050a",
          navy: "#07111f",
          steel: "#9fb5c9",
          blue: "#37a8ff",
          gold: "#d8b76a",
          red: "#b63742",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "blue-glow": "0 0 40px rgba(55,168,255,.24)",
        "gold-glow": "0 0 36px rgba(216,183,106,.18)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(18px,-12px,0)" },
        },
        rain: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "70px 170px" },
        },
      },
      animation: {
        scan: "scan 7s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        rain: "rain 2.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
