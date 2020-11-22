const config = require(`../config`);
const gulp = require(`gulp`);

module.exports = function json() {
  return gulp
    .src(config.json.src)
    .pipe(gulp.dest(config.json.dist));
}