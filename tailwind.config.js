/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#043873',
          primary: '#4F9CF9',
          accent: '#FFE492',
        }
      }
    },
  },
  plugins: [],
}
