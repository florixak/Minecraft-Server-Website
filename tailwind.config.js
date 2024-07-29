/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      h1: "3rem",
      h2: "1.5rem",
      "minigame-title": "2rem",
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
        "dark-blue": "#201E43",
        background: "#334155",
        blue: "#134B70",
        light: "#EEEEEE",
        hover: "#201E43",
      },
    },
    fontFamily: {
      "titillium-web": ["Titillium Web", "sans-serif"],
    },
    animation: {
      wiggle: "wiggle 10s ease-in-out infinite",
      bounce: "bounce 1s linear infinite",
      "bounce-right": "bounce-right 1s linear infinite",
      "bounce-left": "bounce-left 1s linear infinite",
      floating: "floating 3s ease-in-out infinite",
      "move-right": "move-right 1s ease-in-out",
      "move-right-hover": "move-right-hover 0.5s forwards",
      "move-right-reverse": "move-right-reverse 0.5s forwards",
      pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      none: "none",
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
      floating: {
        "0%": { transform: "translate(0, 0px)" },
        "50%": { transform: "translate(0, 5px)" },
        "100%": { transform: "translate(0, -0px)" },
      },
      "move-right-hover": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(10px)" },
      },
      "move-right-reverse": {
        "0%": { transform: "translateX(10px)" },
        "100%": { transform: "translateX(0)" },
      },
      pulse: {
        "0% 100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
      },
    },
  },
  plugins: [],
};
