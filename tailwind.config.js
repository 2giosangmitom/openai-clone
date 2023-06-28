/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/*.tsx", "./src/components/*.tsx", "./src/content/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#040C18",
        input: "rgba(0, 40, 83, 1)",
      },
      dropShadow: {
        image: "0 0 0.5em #4ac7d1",
      },
      keyframes: {
        scale: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.95)",
            filter: "drop-shadow(0 0 1em #4ac7d1)",
          },
        },
      },
      animation: {
        scale: "scale 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
