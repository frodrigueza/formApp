const webpack = require('webpack');
var path = require("path");
module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    },  { 
      test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /bootstrap\/dist\/js\/umd\//,
      loader: 'imports?jQuery=jquery'
    }],
  }
};