const gulp = require(`gulp`);
const pugToHtml = require(`./gulp/tasks/pugToHtml`);
const styles = require(`./gulp/tasks/styles`);
const stylesDev = require(`./gulp/tasks/stylesDev`); // добавить вызов этого таска в series
const scripts = require(`./gulp/tasks/scripts`);
const scriptsDev = require(`./gulp/tasks/scriptsDev`); // добавить вызов этого таска в series
const scriptsLibs = require(`./gulp/tasks/scriptsLibs`);

module.exports.build = gulp.series(
  styles,
  scripts,
  scriptsLibs,
  pugToHtml,
  )