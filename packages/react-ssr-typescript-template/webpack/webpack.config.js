// webpack base configuration
const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const tsConfig = require('../tsconfig.json');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const workspace = path.join(__dirname, '../');
const sourceDir = path.join(workspace, 'src/client');
const outputDir = path.join(workspace, 'dist/static');
const publicDir = path.join(workspace, 'public');

const hash = process.env.NODE_ENV === 'production' ? '[chunkhash:8]' : '[contenthash:8]';

/**
 * @param {string} dirPath
 * @param {string} patterns 
 * @returns {Recode<string, any>}
 */
function getEntries(dirPath, patterns) {
  const files = glob.sync(path.join(dirPath, patterns));
  const entries = {};
  files.forEach(file => {
    const relative = path.join('/', path.relative(dirPath, file));
    const name = relative.replace(/\/index\.(jsx?|tsx?)/g, "");
    entries[name || '/'] = file;
  });
  return entries;
}

const baseConfig = {
  mode: 'development',
  entry: {
    main: path.join(sourceDir, 'index.tsx'),
    ...getEntries(path.join(sourceDir, 'pages'), '/**/index.@(js|jsx|ts|tsx)')
  },
  output: {
    path: outputDir,
    filename: (e) => {
      if (e.chunk.name === 'main') return path.join('chunks', `main.${hash}.js`);
      return path.join('chunks', 'pages', '[name]', `index.${hash}.js`);
    },
    chunkFilename: `index.${hash}.js`,
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'build.manifest.json',
      filter: (file) => file.isChunk,
      generate: (seed, files) => {
        const manifest = { scripts: {}, styles: {} };
        files.forEach(file => {
          const path = file.path.replace(/auto\//, '').replace(/\/+/g, '/');
          // is script
          if (/.*\.js/.test(file.name)) {
            manifest.scripts[file.name.replace(/\.js/, '')] = path;
          }
          // is stylesheet
          else if (/.*\.css/.test(file.name)) {
            manifest.styles[file.name.replace(/\.css/, '')] = path;
          }
        });
        return manifest;
      }
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: publicDir,
        to: outputDir,
      }]
    }),
    new MiniCssExtractPlugin({
      filename: (e) => {
        if (e.chunk.name === 'main') return path.join('css', `main.${hash}.css`);
        return path.join('css', '[name]', `index.${hash}.css`)
      }
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
    minimizer: [new TerserPlugin({
      // no license comments
      extractComments: false
    })],
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

module.exports = baseConfig;
