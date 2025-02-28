/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#0A0E4B',
        'gray-500': '#FFFFFF',
        'black-500': '#0A0E4B',
      }
    },
  },
  plugins: [],
}