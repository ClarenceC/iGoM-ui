const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'Button': './packages/Button/index.js',
    'SexRadio': './packages/SexRadio/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    filename: '[name]/[id].js',
    library: 'iGoM-ui',
    libraryTarget: 'umd'
  },
  mode: 'development',
  devtool: 'inline-source-map',
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          // 'style-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true
          //   }
          // },
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css'
    }),
    // new ExtractTextPlugin({
    //   filename: 'main.css'
    // })
  ]
}