const config = require(`../config`);
const gulp = require(`gulp`);

module.exports = function video() {
  return gulp
    .src(config.video.src)
    .pipe(gulp.dest(config.video.dist));
}