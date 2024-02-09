/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif", "sans-serif"],
      },
      colors: {
        darkText: "#212428",
        bodyColor: "#fefefa",
        boxBg: "linear-gradient(145def, #1e2024, #23272b",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      },
    },
  },
  plugins: [],
};
