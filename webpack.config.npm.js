const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false // Note `mangle.properties` is `false` by default.
        }
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
