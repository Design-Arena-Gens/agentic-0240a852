import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          yellow: "#F5F749",
          cyan: "#49F5F7",
          magenta: "#F749F5"
        },
        midnight: "#0b0c1f",
        aurora: "#1c1f3a"
      },
      fontFamily: {
        techno: ["'Oxanium'", "sans-serif"],
        action: ["'Bebas Neue'", "sans-serif"]
      },
      boxShadow: {
        aura: "0 0 30px rgba(73, 245, 247, 0.45)"
      },
      animation: {
        "energy-pulse": "energy 2s infinite",
        "scanline": "scan 6s linear infinite",
        "glitch": "glitch 4s infinite"
      },
      keyframes: {
        energy: {
          "0%, 100%": { filter: "drop-shadow(0 0 0 rgba(247, 73, 245, 0.6))" },
          "50%": { filter: "drop-shadow(0 0 15px rgba(73, 245, 247, 0.95))" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        glitch: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-3px, 2px)" },
          "40%": { transform: "translate(-1px, -3px)" },
          "60%": { transform: "translate(4px, 1px)" },
          "80%": { transform: "translate(-2px, 4px)" }
        }
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cfilter id=%22n%22 x=%22-20%22 y=%22-20%22 width=%22140%25%22 height=%22140%25%22%3E%3CfeTurbulence baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.18%22/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

export default config;
