const webpack = require('webpack');

module.exports = {
  module: {},
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    // new webpack.IgnorePlugin(/^\.\/locale\/(en|de)\.js$/, /moment$/)
  ]
};
