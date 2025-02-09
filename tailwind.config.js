/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#2d2327",
          800: "#45364b",
        },
        red: {
          500: "62466b",
        },
        purple: {
          900: "#8c93a8",
        },
      },
    },
  },
  plugins: [],
};
