/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        19: "repeat(19, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
      },
      colors: {
        dark: "#18181f",
        light: "#FEFEFE",
        OTHER_NONMETALS: "#19583c",
        NOBLE_GASSES: "#396113",
        ALKALI_METALS: "#7e1957",
      },
    },
  },
  plugins: [],
};
