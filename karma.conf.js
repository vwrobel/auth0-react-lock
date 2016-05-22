var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: ['Chrome'],

    singleRun: false,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'dots', 'coverage' ],

    webpack: {
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
              },
              {
                test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
                loaders: [
                  'transform-loader/cacheable?brfs',
                  'transform-loader/cacheable?packageify'
                ]
              }, {
                test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
                loader: 'transform-loader/cacheable?ejsify'
              }, {
                test: /\.json$/,
                loader: 'json-loader'
              }
            ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
