// webpack base configuration
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsConfig = require('../tsconfig.json');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const workspace = path.join(__dirname, '../');
const sourceDir = path.join(workspace, 'src/client');
const outputDir = path.join(workspace, 'dist');
const publicDir = path.join(workspace, 'public');

const webpackBaseConfig = {
  mode: 'development',
  entry: {
    app: path.join(sourceDir, 'index.tsx'),
  },
  output: {
    path: outputDir,
    filename: 'index.[fullhash:8].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Webpack Starter',
      template: path.join(publicDir, 'index.html'),
      filename: 'index.html'
    }),
    new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
      PUBLIC_URL: './static'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: publicDir, to: path.join(outputDir, 'static') }
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
        test: /\.m?jsx?$/,
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
