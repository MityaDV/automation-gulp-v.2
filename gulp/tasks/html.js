const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require('gulp-plumber')

module.exports = function copyHtml() {
  return gulp
    .src(config.html.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dist));
}