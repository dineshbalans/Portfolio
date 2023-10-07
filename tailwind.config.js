/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // SECTION 1
        primary: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        // SECTION 2
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "1440px"
      },  
      colors: {
        // SECTION 1
        primary: "#050816",
        secondary: "#ffffff",
        tertiary: "#000000",
        // SECTION 2 
        bodyColor: "#0B1120",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #030712, -10px -10px 19px #0f172a",
      },
      scale:{
        "115" : "1.15", 
        "120" : "1.2" 
      }
    },
  },
  plugins: [],
};


// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       primary: "Poppins ",
//       body: "Poppins",
//     },
//     container: {
//       padding: {
//         DEFAULT: "1rem",
//         lg: "3rem",
//       },
//     },
//     screens: {
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//     },
//     extend: {
//       colors: {
//         primary: "#050816",
//         secondary: "#ffffff",
//         tertiary: "#000000",
//       },
//     },
//   },
//   plugins: [],
// };
