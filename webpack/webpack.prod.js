// webpack production configuration
const webpackBaseConfig = require('./webpack.config');

module.exports = {
  ...webpackBaseConfig,
  mode: 'production',
}
