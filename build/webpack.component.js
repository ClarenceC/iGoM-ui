const path = require('path')

module.exports = {
  entry: path.resolve(process.cwd(), '/packages/index.js'),
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    filename: '[name].js',
    library: 'iGoM-ui',
    libraryTarget: 'umd'
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
          'style-loader',
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
  }
}