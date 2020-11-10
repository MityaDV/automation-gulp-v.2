const config = require(`../config`);
const gulp = require(`gulp`);
const sass = require(`gulp-sass`);

module.exports = function styles() {
  return gulp
    .src(config.css.src)
    .pipe(sass())
    .pipe(gulp.dest(config.css.dist))
}