const config = require(`../config`);
const gulp = require(`gulp`);
const webp = require(`gulp-webp`);

module.exports = function img2Webp() {
  return gulp
    .src(config.img.srcRasterImg)
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest(config.img.dist));
}