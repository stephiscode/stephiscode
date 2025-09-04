/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure Tailwind scans all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
