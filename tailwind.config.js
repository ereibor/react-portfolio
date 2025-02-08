/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipadPro': {'min': '1024px', 'max': '1366px'}, // Only applies to iPad Pro range
      },
    },
  },
  plugins: [],
}