/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#62466b", // main brand color (dusty purple)
          light: "#8c93a8", // lighter variant
          dark: "#2d2327", // darker / complementary shade
        },
        // If you still want a "purple" group or "dark" group, define them here
      },
    },
  },
  plugins: [],
};
