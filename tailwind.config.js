/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#343e34',
        grey: '#262626',
        green2: '#3d5434'
      }
    },
  },
  plugins: [],
}

