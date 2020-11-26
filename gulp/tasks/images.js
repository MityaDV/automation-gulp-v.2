const config = require(`../config`);
const gulp = require(`gulp`);
const imagemin = require(`gulp-imagemin`);

module.exports = function images() {
  return gulp
    .src(config.img.src)
    .pipe(
      imagemin([
        imagemin.mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 3
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: false,
            cleanupIDs: false
          }]
        })
      ])
    )
    .pipe(gulp.dest(config.img.dist));
}