import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FFFFFF",
        paper: "#030303",
        line: "#2A2A2A",
        surface: "#101010",
        "surface-soft": "#050505",
        muted: "#D4D4D8",
        moss: "#EF4444",
        coral: "#F87171",
        sky: "#EF4444",
        amber: "#F97316",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.62)",
        glow: "0 0 0 1px rgba(239, 68, 68, 0.34), 0 20px 70px rgba(239, 68, 68, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
