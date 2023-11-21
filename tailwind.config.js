/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'hoverGreen': '#D6F1DD',
      },
      textColor:{
        'grayText': '#FFFFFF',
      },
      fontWeight: {
        'headerWeight' : '600',
      },
      fontSize:{
        'headerFont' : '18px',
      }

    },
  },
  plugins: [],
}

