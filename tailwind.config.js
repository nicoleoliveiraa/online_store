/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        robotoMono: ['"Roboto Mono"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

