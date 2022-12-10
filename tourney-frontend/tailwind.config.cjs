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
        success: "#4CAF50",
        warning: "#FF9800",
        error: "#FF0000",
        info: "#52aef7",
        light: "#F5F5F5",
        dark: "#212121",
        gray: colors.zinc,
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "dark-mode"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
  },
  plugins: [],
};
