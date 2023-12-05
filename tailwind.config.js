/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.html',
    './src/js/*.mjs',
    './src/js/**/*.mjs',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(180deg, #47585C 0%, #C8D5BB 74.48%);',
      },
      colors: {
        tokyo: '#F4F4F4',
        rustGrey: '#47585C',
        willowGrey: '#C8D5BB',
      },
      fontFamily: {
        garamond: 'garamond-premier-pro-display, serif',
        etica: 'lft-etica-mono, sans-serif',
      },
    },
  },
  plugins: [],
};
