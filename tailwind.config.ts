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
        ink: "#1A1714",
        paper: "#F7F5F0",
        line: "#DDD9D0",
        surface: "#FFFFFF",
        "surface-soft": "#F0EDE6",
        muted: "#5A5650",
        moss: "#2A7A4A",
        coral: "#E8733A",
        sky: "#C94A2A",
        amber: "#B06010",
      },
      boxShadow: {
        soft: "0 2px 4px rgba(26, 23, 20, 0.04), 0 8px 24px rgba(26, 23, 20, 0.07), 0 24px 56px rgba(26, 23, 20, 0.05)",
        glow: "0 0 0 1.5px rgba(201, 74, 42, 0.18), 0 4px 16px rgba(201, 74, 42, 0.14), 0 20px 48px rgba(201, 74, 42, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
