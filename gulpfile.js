const gulp = require(`gulp`);
const clean = require(`./gulp/tasks/clean`);
const copy = require(`./gulp/tasks/copy`);
const images = require(`./gulp/tasks/images`);
const webp = require(`./gulp/tasks/webp`);
const video = require(`./gulp/tasks/video`);
const styles = require(`./gulp/tasks/styles`);
const stylesDev = require(`./gulp/tasks/stylesDev`); // добавить вызов этого таска в series
const sprite = require(`./gulp/tasks/sprite`);
const scripts = require(`./gulp/tasks/scripts`);
const scriptsDev = require(`./gulp/tasks/scriptsDev`); // добавить вызов этого таска в series
const scriptsLibs = require(`./gulp/tasks/scriptsLibs`);
const pug = require(`./gulp/tasks/pug`);
const html = require(`./gulp/tasks/html`);
const json = require(`./gulp/tasks/json`);
const serve = require(`./gulp/tasks/serve`);

module.exports.build = gulp.series(
  clean,
  copy,
  images,
  webp,
  video,
  styles,
  sprite,
  scripts,
  scriptsLibs,
  pug,
  html,
  json,
  serve
),

module.exports.buildDev = gulp.series(
  clean,
  copy,
  images,
  webp,
  video,
  stylesDev,
  sprite,
  scriptsDev,
  scriptsLibs,
  pug,
  json
),

module.exports.buildDevLight = gulp.series(
  styles,
  scripts,
  scriptsLibs,
  pug,
  json
)