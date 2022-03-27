// webpack production configuration
const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
  },
}
