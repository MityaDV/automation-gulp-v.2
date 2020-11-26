const config = require(`../config`);
const gulp = require(`gulp`);
const server = require(`browser-sync`).create();
const stylesDev = require(`./stylesDev`);
const images = require(`./images`);
const webp = require(`./webp`);

module.exports = function serve(done) {
  server.init({
    server: config.dist,
    notify: false,
    open: true,
    cors: true,
    ui: false,
    reloadDelay: 500,
    files: [
      {
        fn: function(event, file) {
          this.reload();
          this.done();
        }
      }
    ]
  });
  gulp.watch(config.css.watch, gulp.series(stylesDev)).on(`change`, server.reload);
  gulp.watch(config.img.src, gulp.series(images)).on(`change`, server.reload);
  gulp.watch(config.img.srcRasterImg, gulp.series(webp)).on(`change`, server.reload);
}