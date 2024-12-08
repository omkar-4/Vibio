/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkmode-primary-bg": "#0d0d0d",
        "black-text" : "#0d0d0d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
