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
        'navColor' : '#092A5D',
        'mobilenavcolor': '#16B13B',
      },
      textColor:{
        'grayText': '#999999',
      },
      fontWeight: {
        'headerWeight' : '600',
      },
      fontSize:{
        'headerFont' : '18px',
        '10px' : '10px',
        '8px' : '8px' 

      }

    },
  },
  plugins: [],
}

