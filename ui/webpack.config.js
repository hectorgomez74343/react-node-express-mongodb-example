const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.REACT_APP_GET_ORDERS": JSON.stringify(
        process.env.REACT_APP_GET_ORDERS
      ),
      "process.env.REACT_APP_CREATE_ORDER": JSON.stringify(
        process.env.REACT_APP_CREATE_ORDER
      ),
      "process.env.REACT_APP_DELETE_ORDER": JSON.stringify(
        process.env.REACT_APP_DELETE_ORDER
      ),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|webp|jpeg|mp3|webp)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
};
