// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",        // ← Covers src/ folder
    "./app/**/*.{js,ts,jsx,tsx}",        // ← If you have app/ outside src
    "./pages/**/*.{js,ts,jsx,tsx}",      // ← Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // ← Optional: if you have components/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}