const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  entry: path.resolve(process.cwd(), '/site/main.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'iGoM-ui',
      filename: 'index.html',
      template: path.resolve(process.cwd(), '/site/template/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css'
    })
  ]
}
