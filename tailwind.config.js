/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
      }
    },
  },
  plugins: [],
}
