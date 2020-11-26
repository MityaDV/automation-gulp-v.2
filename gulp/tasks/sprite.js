const config = require(`../config`);
const gulp = require(`gulp`);
const rename = require(`gulp-rename`);
const svgstore = require(`gulp-svgstore`);

module.exports = function sprite() {
  return gulp
    .src(config.sprite.src)
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename(config.sprite.name))
    .pipe(gulp.dest(config.sprite.dist));
}