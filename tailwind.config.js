/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ['./**/*.{js},".index.html'],
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    colors: {
      White: "hsl(0, 0%, 100%)",
      cream: "hsl(30, 54%, 90%)",
      beige: "hsl(30, 18%, 87%)",
      gray: "hsl(30, 10%, 34%)",
      lightblack: "hsl(24, 5%, 18%)",
      brown: "hsl(14, 45%, 36%)",
      purple: "hsl(332, 51%, 32%)",
      rose: "hsl(330, 100%, 98%)",
    },
  },
  fontFamily: {
    serif: "Young Serif",
    outfit: "Outfit",
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
