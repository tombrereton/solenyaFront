const {resolve} = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    app: './index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ]
  },
}