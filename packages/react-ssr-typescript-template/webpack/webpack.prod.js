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
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
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
