const gulp = require(`gulp`);
const pugToHtml = require(`./gulp/tasks/pugToHtml`);
const styles = require(`./gulp/tasks/styles`);
const stylesDev = require(`./gulp/tasks/stylesDev`); // добавить вызов этого таска в series
const scripts = require(`./gulp/tasks/scripts`);
const scriptsDev = require(`./gulp/tasks/scriptsDev`); // добавить вызов этого таска в series
const scriptsLibs = require(`./gulp/tasks/scriptsLibs`);
const clean = require(`./gulp/tasks/clean`);
const sprite = require(`./gulp/tasks/sprite`);
const copy = require(`./gulp/tasks/copy`);
const images = require(`./gulp/tasks/images`);
const webp = require(`./gulp/tasks/imgToWebp`);

module.exports.build = gulp.series(
  clean,
  copy,
  images,
  webp,
  styles,
  sprite,
  scripts,
  scriptsLibs,
  pugToHtml,
  )