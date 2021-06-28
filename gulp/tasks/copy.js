const config = require(`../config`);
const gulp = require(`gulp`);

module.exports = function copy() {
  return gulp
    .src([
      config.fonts,
      config.img.src,
      config.svg.src,
    ], {
      base: config.src
    })
    .pipe(gulp.dest(config.dist));
}
