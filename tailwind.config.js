/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      h1: "3rem",
      h2: "1.5rem",
      description: "1rem",
    },
    screens: {
      desktop: "1440px",
      laptop: "1366px",
      tablet: "768px",
      mobile: "375px",
    },
    container: {
      center: "center",
      padding: {
        DEFAULT: "3rem",
        sm: "1rem",
      },
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
    },
  },
  plugins: [],
};
