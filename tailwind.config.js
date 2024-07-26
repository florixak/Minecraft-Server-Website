/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      h1: "3rem",
      h2: "1.5rem",
      description: "0.8rem",
    },
    screens: {
      desktop: "1440px",
      laptop: "1366px",
      tablet: "768px",
      mobile: "375px",
    },
    extend: {
      colors: {
        darkBlue: "#201E43",
        background: "#334155",
        blue: "#134B70",
        light: "#EEEEEE",
      },
    },
    fontFamily: {
      "bebas-neue": ["Bebas Neue", "serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    animation: {
      wiggle: "wiggle 10s ease-in-out infinite",
      bounce: "bounce 1s linear infinite",
      "bounce-right": "bounce-right 1s linear infinite",
      "bounce-left": "bounce-left 1s linear infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-20deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      bounce: {
        "0%, 100%": { transform: "translateY(-5%)" },
        "50%": { transform: "translateY(10%)" },
      },
      "bounce-right": {
        "0%, 100%": { transform: "translateX(0%)" },
        "50%": { transform: "translateX(5%)" },
      },
      "bounce-left": {
        "0%, 100%": { transform: "translateX(0%)" },
        "50%": { transform: "translateX(-5%)" },
      },
    },
  },
  plugins: [],
};
