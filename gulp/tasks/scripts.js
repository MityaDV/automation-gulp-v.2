const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const rollup = require(`gulp-better-rollup`);
const {babel} = require(`@rollup/plugin-babel`);
const {nodeResolve} = require(`@rollup/plugin-node-resolve`);
const commonjs = require(`@rollup/plugin-commonjs`);
const uglify = require(`gulp-uglify`);
const sourcemaps = require(`gulp-sourcemaps`);
const server = require(`browser-sync`).create();

module.exports = function scripts() {
  return gulp
    .src(config.js.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      rollup(
        {
          plugins: [commonjs(), nodeResolve(), babel({ babelHelpers: 'bundled' })]
        },
        config.js.mode
      )
    )
    .pipe(uglify())
    .pipe(plumber())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.js.dist))
    .pipe(server.stream());
}
