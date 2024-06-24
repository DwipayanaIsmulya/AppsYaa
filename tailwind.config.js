/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 5px 5px 0px rgba(0, 0, 0, 0.5)',
        'custom-shadow2': '0px 5px 5px 0px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-gray': 'rgba(77, 72, 72, 0.74)',
        'custom-bg': 'rgba(64, 56, 56, 0.76)',
        'custom-bg2': 'rgba(37, 33, 33, 0.73)',
      },
    },
  },
  plugins: [],
};
