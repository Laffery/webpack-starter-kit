const path = require("path");
const nodeExternals = require("webpack-node-externals");

const workspace = path.join(__dirname, "../");
const outputDir = path.join(workspace, "build");
const sourceDir = path.join(workspace, "src/server");

module.exports = {
  mode: process.env.NODE_ENV ?? "development",
  target: "node",
  devtool: "inline-source-map",
  entry: {
    server: path.join(sourceDir, 'index.ts')
  },
  output: {
    path: outputDir,
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  // don't compile node_modules
  externals: [nodeExternals()],
  module: {
    rules: [
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
    ],
  },
};
