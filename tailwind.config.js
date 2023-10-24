/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html', './public/**/*.html', './public/**/**/*.mjs'],
  theme: {
    extend: {
      fontFamily: {
        garamond: 'garamond-premier-pro-display, serif',
        etica: 'lft-etica-mono, sans-serif',
      },
    },
  },
  plugins: [],
};
