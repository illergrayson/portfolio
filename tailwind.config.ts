import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C1917",
          50: "rgba(28, 25, 23, 0.025)",
          100: "rgba(28, 25, 23, 0.05)",
          200: "rgba(28, 25, 23, 0.08)",
          300: "rgba(28, 25, 23, 0.12)",
        },
        line: "rgba(28, 25, 23, 0.08)",
        accent: {
          DEFAULT: "#C2724E",
          soft: "#D4956F",
          glow: "#A85A3A",
        },
        // VUE brand tokens (used only in the VUE case study mockup)
        vue: {
          cream: "#F7F3EE",
          cream2: "#EFEAE5",
          teal: "#0D4D4D",
          char: "#1E1C1A",
          gray: "#9D938A",
          taupe: "#B8A38F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1120px",
        prose: "680px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
