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
          DEFAULT: "#08080A",
          50: "#0C0C0F",
          100: "#101013",
          200: "#16161A",
          300: "#1D1D22",
        },
        line: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#7C9CFF",
          soft: "#A9BBFF",
          glow: "#5E7BFF",
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
