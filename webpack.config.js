const config = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'progressbar-bundle.js',
    library: ['ProgressBar'],
   libraryTarget: ‘umd’,
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

module.exports = config;