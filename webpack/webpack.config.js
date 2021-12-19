// webpack base configuration
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsConfig = require('../tsconfig.json');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const paths = require('./path.config');

const webpackBaseConfig = {
  mode: 'development',
  entry: {
    app: `${paths.src}/index.tsx`,
  },
  output: {
    path: paths.build,
    filename: 'index.[fullhash:8].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Webpack Starter',
      template: `${paths.public}/index.html`,
      filename: 'index.html'
    }),
    new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
      PUBLIC_URL: './static'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: paths.public, to: `${paths.build}/static` }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[fullhash:8].css'
    })
  ],
  resolve: {
    plugins: tsConfig.compilerOptions.baseUrl ? [new TSConfigPathsPlugin({
      baseUrl: tsConfig.compilerOptions.baseUrl
    })] : [],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      // javascript
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // typescript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        },
      },
      // css
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      // fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
}

module.exports = webpackBaseConfig;
