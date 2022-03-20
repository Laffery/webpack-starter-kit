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
    host: '127.0.0.1',
    port: process.env.PORT ?? 3000,
    proxy: [{
      context: ["/api"],
      target: "http://localhost:3001",
      pathRewrite: {
        '^/api': ''
      }
    }]
  },
}
