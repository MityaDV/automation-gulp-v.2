const gulp = require(`gulp`);
const pugToHtml = require(`./gulp/tasks/pugToHtml`);
const styles = require(`./gulp/tasks/styles`);
const stylesDev = require(`./gulp/tasks/stylesDev`); // добавить вызов этого таска в series
const scripts = require(`./gulp/tasks/scripts`);

module.exports.build = gulp.series(styles, scripts, pugToHtml)