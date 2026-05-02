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
        ink: "#24313A",
        paper: "#F6FBFD",
        line: "#E3EEF3",
        surface: "#FFFFFF",
        "surface-soft": "#EAF8FB",
        muted: "#687987",
        moss: "#6CBF84",
        coral: "#F59E0B",
        sky: "#14A9C7",
        amber: "#F7C948",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(49, 87, 102, 0.12)",
        glow: "0 0 0 1px rgba(20, 169, 199, 0.22), 0 18px 46px rgba(20, 169, 199, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
