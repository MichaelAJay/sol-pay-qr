const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 3000,
    open: true,
  },
  resolve: {
    fallback: {
      "crypto": false,
      "stream": false,
      "buffer": false,
    }
  }
}; 