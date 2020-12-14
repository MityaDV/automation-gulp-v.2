const gulp = require(`gulp`);
const clean = require(`./gulp/tasks/clean`);
const copy = require(`./gulp/tasks/copy`);
const images = require(`./gulp/tasks/images`);
const webp = require(`./gulp/tasks/webp`);
const video = require(`./gulp/tasks/video`);
const styles = require(`./gulp/tasks/styles`);
const sprite = require(`./gulp/tasks/sprite`);
const scripts = require(`./gulp/tasks/scripts`);
const scriptsLibs = require(`./gulp/tasks/scriptsLibs`);
const pug = require(`./gulp/tasks/pug`);
const html = require(`./gulp/tasks/html`);
const json = require(`./gulp/tasks/json`);
const serve = require(`./gulp/tasks/serve`);
const lighthouse = require(`./gulp/tasks/lighthouse`);
const copyDependencies = require(`./gulp/tasks/copyDependencies`);

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
  json,
  pug,
  styles,
  scripts,
  scriptsLibs,
  images,
  webp,
  sprite
);

const build = gulp.series(clean, copyDependencies, dev);

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)

module.exports.lighthouse = gulp.series(lighthouse)
