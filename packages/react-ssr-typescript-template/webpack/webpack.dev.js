// webpack development configuration
const path = require('path');
const webpackBaseConfig = require('./webpack.config');

const workspace = path.join(__dirname, '../');

module.exports = {
  ...webpackBaseConfig,
  devServer: {
    historyApiFallback: true,
    watchFiles: path.join(workspace, 'src'),
    open: false,
    compress: true,
    hot: true,
  },
}
