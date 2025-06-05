/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      screens: {
        'max-xl': {'max': '1200px'}, // кастомный брейкпоинт
      },
    },
  },
  plugins: [],
}

