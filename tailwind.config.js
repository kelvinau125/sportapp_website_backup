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

    },
  },
  plugins: [],
}

