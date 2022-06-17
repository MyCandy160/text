const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 2002, // 端口号
    open: true
  }
};
