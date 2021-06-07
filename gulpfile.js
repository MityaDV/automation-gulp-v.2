const gulp = require('gulp');
const clean = require('./gulp/tasks/clean');
const copyDependencies = require('./gulp/tasks/copyDependencies');
const smartgrid = require('./gulp/tasks/smartGrid');
const copy = require('./gulp/tasks/copy');
const video = require('./gulp/tasks/video');
const html = require('./gulp/tasks/html');
const pug = require('./gulp/tasks/pug');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const scriptsLibs = require('./gulp/tasks/scriptsLibs');
const images = require('./gulp/tasks/images');
const webp = require('./gulp/tasks/webp');
const sprite = require('./gulp/tasks/sprite');
const serve = require('./gulp/tasks/serve');
const lighthouse = require('./gulp/tasks/lighthouse');

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development';
    cb();
  };
}

const dev = gulp.parallel(
  copy,
  video,
  html,
  pug,
  styles,
  scripts,
  scriptsLibs,
  images,
  webp,
  sprite
);

const build = gulp.series(clean, copyDependencies, smartgrid, dev);

module.exports.start = gulp.series(setMode(), build, serve);
module.exports.build = gulp.series(setMode(true), build);

module.exports.lighthouse = gulp.series(lighthouse);
