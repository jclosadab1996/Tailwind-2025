/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3AB0FF",
          default: "#007BFF",
          dark: "#0056B3",
        },
      },
    },
  },
  plugins: [],
};
