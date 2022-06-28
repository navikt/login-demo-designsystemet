/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@navikt/ds-tailwind")],
  theme: {
    extend: {},
  },
  plugins: [],
};
