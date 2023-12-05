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
      fontFamily: {
        garamond: 'garamond-premier-pro-display, serif',
        etica: 'lft-etica-mono, sans-serif',
      },
    },
  },
  plugins: [],
};
