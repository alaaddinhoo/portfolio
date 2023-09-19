/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        Baskerville: ["Libre Baskerville", "sans-serif"],
        Franklin: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        body_background: "var(--body_background)",
        body_color: "var(--body_color)",
        body_border: "var(--body_border)",
        link_color: "var(--link_color)",
      },
    },
  },
  plugins: [],
};
