const config = require(`../config`);
const gulp = require(`gulp`);
const npmDist = require('gulp-npm-dist');
const del = require(`del`);

module.exports = function copyModules(cb) {
  del(config.copyDependencies.dist).then(() => {
    gulp.src(npmDist(), { base: config.copyDependencies.srcCopyModules})
      .pipe(gulp.dest(config.copyDependencies.dist)).on('end', cb)
  }).catch(cb)
}
