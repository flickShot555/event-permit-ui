// postcss.config.js (at project root)
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),  // ← correct name, no extra "d"
    require('autoprefixer'),
  ],
};
