import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A0019", // Deep Burgundy (Brand)
        trust: "#D4AF37",   // Gold (Luxury)
        accent: "#E57373",  // Soft Rose (Highlight)
        cream: "#FDF6F0",   // Light Ivory (Soft Section BG)
        cta: "#C62828",     // Primary Button (Conversions)
      },
      borderRadius: {
        'xl': '12px',
      },
      fontFamily: {
        heading: ["var(--font-newsreader)"],
        body: ["var(--font-source-sans)"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatslow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'floatslow 7s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
