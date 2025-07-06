/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // ✅ this line is critical for dark mode toggle to work
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  