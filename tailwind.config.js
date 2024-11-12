/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#17CF97",
        cBlack: "#121212",
        cGreen: "#17CF97",
        cBlue: "#171ECF",
        cRed: "#FF4B61",
        cWhite10: "#F9F9F9"
      }
    },
  },
  plugins: [],
}