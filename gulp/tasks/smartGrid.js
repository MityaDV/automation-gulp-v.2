// const gulp = require(`gulp`);
const smartGrid = require('smart-grid');
const config = require('../config');

module.exports = function createSmartGrid(cb) {
  smartGrid(config.smartGrid.dist, config.smartGrid);
  cb();
}
