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
        secondary: "#593F62",
        neutral: "#666666",
        light: "#ffff99"
      }
    },
  },
  plugins: [],
}