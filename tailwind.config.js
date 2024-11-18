//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
    },
  },
  plugins: [],
}