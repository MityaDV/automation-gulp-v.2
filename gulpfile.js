const gulp = require(`gulp`);
const pugToHtml = require(`./gulp/tasks/pugToHtml`);
const styles = require(`./gulp/tasks/styles`);

module.exports.start = gulp.series(pugToHtml, styles)