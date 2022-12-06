/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cardBg: "rgba(255, 255, 255, 0.16)",
        backdropBg: "rgba(0, 0, 0, 0.75)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
