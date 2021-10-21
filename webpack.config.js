const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Redux learning",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      favicon: "./src/favicon.ico",
    }),
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: false,
  },
};
