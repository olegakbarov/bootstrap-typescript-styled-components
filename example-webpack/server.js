/* eslint-env node */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.devServer.contentBase,
  hot: true,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  // console.log()
  console.log('Listening at localhost:8080');
});


