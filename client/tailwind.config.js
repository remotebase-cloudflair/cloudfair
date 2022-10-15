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
        black: '#222121',
        dark: {
          500: '#16161D',
        },
      }
    },
  },
  plugins: [],
}
