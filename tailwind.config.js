/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // if you have other folders or file types, include them too
  ],
  theme: {
    extend: {
      colors: {
        // Example custom dark color palette (optional).
        // You can tweak these or just rely on Tailwind’s default palette.
        dark: {
          900: "#0b0b0b",
          800: "#181818",
        },
        red: {
          500: "#f43f5e", // Tailwind's default 'red-500'
          // you can override or add more custom reds if you like
        },
        purple: {
          900: "#6b21a8", // example 'purple-900'
        },
      },
    },
  },
  plugins: [],
};
