/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flow: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-120%)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "move-infinite": "flow 25s linear infinite",
      },
    },
    screens: {
      xs: "280px",
      // => @media (min-width: 280px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      oxanium: ["Oxanium", "Pacifico", "cursive"],
    },
  },
  plugins: [],
};
