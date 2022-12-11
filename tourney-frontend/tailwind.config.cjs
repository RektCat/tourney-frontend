const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7B0F28",
        secondary: "#333333",
        accent: "#D61A46",
        outline: "#42F8C1",
        success: "#4CAF50",
        warning: "#FF9800",
        error: "#FF0000",
        info: "#52aef7",
        light: "#F5F5F5",
        dark: "#212121",
        gray: colors.zinc,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
