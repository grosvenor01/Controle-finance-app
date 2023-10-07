/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dominant: "#F2F2FD",
        secondary: "#000056",
        accent: "#6132EC",
      },
    },
  },
  plugins: [require("daisyui")],
};
