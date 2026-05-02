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
        soft: "0 18px 44px rgba(26, 23, 20, 0.08)",
        glow: "0 0 0 1px rgba(201, 74, 42, 0.24), 0 18px 40px rgba(201, 74, 42, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
