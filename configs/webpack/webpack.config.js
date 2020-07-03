const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: [path.resolve(__dirname, "../../src/client/app.tsx")],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", "json"],
  },

  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(
                __dirname,
                "../tsconfigs/tsconfig.client.json"
              ),
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer],
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style!css!postcss",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../dist/client"),
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../src/public/index.html"),
    }),
  ],
  target: "electron-renderer",
};
