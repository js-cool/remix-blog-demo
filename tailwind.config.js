const path = require('path');
const { spacing } = require('tailwindcss/defaultTheme');

const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        current: 'currentColor'
      }
    }
  },
  content: [fromRoot('./app/**/*.+(js|ts|tsx|mdx|md)')],
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
