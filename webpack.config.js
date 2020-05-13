const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new webpack.ProgressPlugin()
  ],
  devServer: {
    port: 9000,
    hot: true
  }
};
