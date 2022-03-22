// webpack production configuration
const webpackBaseConfig = require('./webpack.config');

module.exports = {
  ...webpackBaseConfig,
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
}
