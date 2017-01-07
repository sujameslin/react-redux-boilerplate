/* eslint no-console:0 */
// require('core-js/fn/object/assign');
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import open from 'open';

const config = require('../webpack.config');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.port, 'localhost', (err) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Listening at localhost:${config.port}`);
    console.log('Opening your system browser...');
    return open(`http://localhost:${config.port}`);
  });
