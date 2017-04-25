const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'progressbar-bundle.js',
    library: ['ProgressBar'],
   libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.jsx$/, 
        loader: {
          loader: 'babel-loader', 
          options: {
            presets: ['es2015', 'react']
          }
        }, 
        exclude: /node_modules/
      },
      { test: /\.js$/, 
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }, 
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config;