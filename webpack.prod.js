const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {

  mode: 'production',

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[hash:base64:5]"
              }
            }
          }
        ],
        test: /\.css$/i,
        exclude: /(node_modules|bower_components)/,
      }
    ]
  }
});