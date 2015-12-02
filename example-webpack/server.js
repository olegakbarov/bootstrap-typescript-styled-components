/* eslint-env node */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  contentBase: config.devServer.contentBase,
  hot: true,
  stats: {
    colors: true
  }
})

server.listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log(config.output.publicPath)
  console.log('Listening at localhost:8080');
});