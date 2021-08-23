const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    open: true,
    port: 3000,
    contentBase: './dist',
    watchContentBase: true,
  },

  module: {
    rules: [
      {
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[path][name]__[local]"
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