const path = require('path');

module.exports = {
  entry: './dist/menu.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'menu.bundle.js',
  },
};