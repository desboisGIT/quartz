/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
    './src/navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'dark-main-1': '#272727',
        'dark-main-2': '#2F2F2F',
        'dark-main-3': '#1C1C1C',
        'darker-main-1': '#171717',
        'light-main-1': '#F5F5F7',
        'light-main-2': '#FFFFFF',
        'dark-accent-main-1': '#7365FB',
        'light-accent-main-1': '#C750FF',
        'dark-accent-main-2': '#007BFF',
        'light-accent-main-2': '#007BFF',
        'gray-main-1': '#A4A4A4',
        'border-main-1': '#3E3E3E',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
