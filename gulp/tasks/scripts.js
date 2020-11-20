const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const rollup = require(`gulp-better-rollup`);
const {babel} = require(`@rollup/plugin-babel`);
const {nodeResolve} = require(`@rollup/plugin-node-resolve`);
const commonjs = require(`@rollup/plugin-commonjs`);
const uglify = require(`gulp-uglify`);


module.exports = function scripts() {
  return gulp
    .src(config.js.src)
    .pipe(plumber())
    .pipe(
      rollup(
        {
          plugins: [commonjs(), nodeResolve(), babel()]
        },
        config.js.mode
      )
    )
    .pipe(uglify())
    .pipe(plumber())
    .pipe(gulp.dest(config.js.dist));
}