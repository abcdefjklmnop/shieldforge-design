import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#070b12",
          2: "#0b1220",
          3: "#0f1a2e",
        },
        accent: {
          blue: "#2563eb",
          cyan: "#06b6d4",
          green: "#10b981",
          amber: "#f59e0b",
          red:   "#ef4444",
        },
        border: {
          DEFAULT: "rgba(51,93,168,0.16)",
          strong:  "rgba(51,93,168,0.28)",
        },
      },
      backgroundImage: {
        "grad-cyan": "linear-gradient(135deg, #06b6d4, #2563eb)",
        "grad-blue": "linear-gradient(135deg, #2563eb, #1e40af)",
      },
      animation: {
        blink: "blink 2s infinite",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":      { opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
