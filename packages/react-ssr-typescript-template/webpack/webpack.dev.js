// webpack development configuration
const path = require('path');
const baseConfig = require('./webpack.config');

const workspace = path.join(__dirname, '../');

module.exports = {
  ...baseConfig,
  devServer: {
    historyApiFallback: true,
    watchFiles: path.join(workspace, 'src'),
    open: false,
    compress: true,
    hot: true,
  },
}
