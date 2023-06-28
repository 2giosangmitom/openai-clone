/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/*.tsx", "./src/components/*.tsx", "./src/content/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#040C18",
        input: "rgba(0, 40, 83, 1)",
      },
    },
  },
  plugins: [],
};
