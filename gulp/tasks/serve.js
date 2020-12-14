const config = require(`../config`);
const gulp = require(`gulp`);
const server = require(`browser-sync`).create();
const styles = require(`./styles`);
const images = require(`./images`);
const webp = require(`./webp`);
const video = require(`./video`);
const html = require(`./html`);
const pug = require(`./pug`);
const scripts = require(`./scripts`);

module.exports = function serve() {
  server.init({
    server: config.dist,
    notify: false,
    open: true,
    cors: true,
    ui: false,
    reloadDelay: 500,
    // files: [
    //   {
    //     fn: function() {
    //       this.reload();
    //     }
    //   }
    // ]
  });
  gulp.watch(config.css.watch, gulp.series(styles)).on(`change`, server.reload);
  gulp.watch(config.img.src, gulp.series(images)).on(`change`, server.reload);
  gulp.watch(config.img.srcRasterImg, gulp.series(webp)).on(`change`, server.reload);
  gulp.watch(config.video.src, gulp.series(video)).on(`change`, server.reload);
  gulp.watch(config.html.src, gulp.series(html)).on(`change`, server.reload);
  gulp.watch(config.pug.watch, gulp.series(pug)).on(`change`, server.reload);
  gulp.watch(config.js.watch, gulp.series(scripts)).on(`change`, server.reload);
}
