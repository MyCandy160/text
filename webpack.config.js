const { VueLoaderPlugin } = require("vue-loader")
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
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 2002, // 端口号
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/i,
        type: "asset",
        generator: { filename: "image/[hash:6][ext]" },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: { filename: "fonts-[name].[hash:6][ext]" },
      },
      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
