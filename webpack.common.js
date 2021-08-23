const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /.js$/,
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
      inject: 'body'
    })
  ]
}