var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

// NODE ENV to production
// uglify the codes
var config = {
  entry:'./app/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.(css)$/, use: ['style-loader','css-loader']}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};

if (process.env.NODE_ENV === 'production') {
  //the above is for the commandline
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) // this is to define the plugin
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}


module.exports = config;
