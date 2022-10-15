/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#152139',
        secondary: '#FF6344',
        black: '#16161D',
        gray: '#3D3D40',
        bgWhite: '#F5F5F5',
        lightGray: '#C4C4C4',
      }
    },
  },
  plugins: [],
}
