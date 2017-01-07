'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../client');
const port = 8000;

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: port
};
