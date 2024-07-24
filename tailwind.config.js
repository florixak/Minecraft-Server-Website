/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      h1: "3rem",
      h2: "1.5rem",
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      "robotos-slab": ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
