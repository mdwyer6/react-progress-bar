const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['es2015', 'react']
          }
        }, 
        exclude: /node_modules/
      },
      { test: /\.js$/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }, 
        exclude: /node_modules/
      },
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
        include: path.join(__dirname, '/styles/')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('/progressbar-bundle.css')
  ]
}

module.exports = config;