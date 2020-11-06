const gulp = require(`gulp`);
const pug2html = require(`./gulp/tasks/pugToHtml`);

module.exports.start = gulp.series(pug2html)