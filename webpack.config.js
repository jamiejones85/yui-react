var webpack = require('webpack');

module.exports = {
    entry: './entry.js', // Your appʼs entry point
    externals: {
      YUI: 'YUI'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
};
