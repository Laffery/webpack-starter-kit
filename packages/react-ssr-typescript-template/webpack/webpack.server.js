const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsConfig = require("../tsconfig.json");

const workspace = path.join(__dirname, "../");
const outputDir = path.join(workspace, "dist/server");
const sourceDir = path.join(workspace, "src/server");

module.exports = {
  mode: process.env.NODE_ENV ?? "development",
  target: "node",
  devtool: "inline-source-map",
  entry: {
    server: path.join(sourceDir, "index.ts")
  },
  output: {
    path: outputDir,
    filename: "index.js",
  },
  resolve: {
    plugins: tsConfig.compilerOptions.baseUrl ? [new TSConfigPathsPlugin({
      baseUrl: tsConfig.compilerOptions.baseUrl
    })] : [],
    extensions: [".ts", ".tsx", ".js"],
  },
  // don't compile node_modules
  externals: [nodeExternals()],
  module: {
    rules: [
      // typescript
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // use the tsconfig in the server directory
              configFile: path.join(sourceDir, "tsconfig.json"),
            },
          },
        ],
      },
      // css
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      // fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
};
