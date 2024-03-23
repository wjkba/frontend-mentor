/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "var(--soft-blue)",
        "soft-red": "var(--soft-red)",
        "grayish-blue": "var(--grayish-blue)",
        "very-dark-blue": "var(--very-dark-blue)",
      },
      screens: {
         'xs': { 'min': '320px', 'max': '640px' },
      },
    },
  },
  plugins: [],
};
