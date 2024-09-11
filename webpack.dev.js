const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    runtimeChunk: 'single'
  },
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: { writeToDisk: true },
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  }
})
