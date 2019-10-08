var path = require('path')
const version = require('./package.json').version
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
    path: path.resolve(__dirname, 'build', version),
    filename: 'gm-i18n.js',
    library: 'gmI18n',
    libraryTarget: 'window'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
