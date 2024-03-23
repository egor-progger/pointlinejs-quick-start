const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  devServer: {
    compress: true,
    port: 9001,
    static: {
      serveIndex: true,
    },
    hot: true,
  },
  entry: "./src/index.ts",
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  })],
  resolve: {
    alias: {
      eve: 'eve-raphael/eve',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }
};
