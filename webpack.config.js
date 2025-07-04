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
    port: 8675,
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ['*.js', '*.html'],
  },
  resolve: {
    fallback: {
      "crypto": false,
      "stream": false,
      "buffer": false,
    }
  }
}; 