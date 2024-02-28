const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        blue: colors.blue,
        black: {
          100: "#111",
          200: "#222",
          300: "#333",
          600: "#666",
        },
      },
      width: {
        main: "calc(100vw - 320px)",
        84: "336px",
      },
      height: {
        main: "calc(100vh - 102px)",
        navbar: "calc(100vh - 180px)",
        120: "480px",
        128: "512px",
      },
      minHeight: {
        128: "512px",
      },
      maxHeight: {
        128: "512px",
      },
      screens: {
        desktop: { max: "1920px", min: "1281px" },
        laptop: { max: "1280px", min: "961px" },
        tablet: { max: "960px" },
      },
      inset: {
        75: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
