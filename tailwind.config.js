/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url(src/img/banner.jpg)",
      },
      colors: {
        'light-blue-600': '#12b3f8',
        'magenta-700': '#ef45fd',
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'Times New Roman'],
      },
      boxShadow: {
        'lg': '0px 0px 10px 5px',
      },
    },
  },
  plugins: [],
}

