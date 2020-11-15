const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require('gulp-plumber')
// const gulpStylelint = require('gulp-stylelint')
const sass = require(`gulp-sass`);
// const cleanCSS = require('gulp-clean-css')
// const sourcemaps = require('gulp-sourcemaps')
// const shorthand = require('gulp-shorthand')
const postcss = require(`gulp-postcss`);
const autoprefixer = require('autoprefixer')
const objectFit = require(`postcss-object-fit-images`);
const rename = require("gulp-rename")
const minify = require(`gulp-csso`);

module.exports = function styles() {
  return gulp
    .src(config.css.src)
    .pipe(plumber())
    // .pipe(gulpStylelint({
    //   failAfterError: false,
    //   reporters: [
    //     {
    //       formatter: 'string',
    //       console: true
    //     }
    //   ]
    // }))
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), objectFit()]))
    .pipe(gulp.dest(config.css.dist))
    // .pipe(shorthand())
    .pipe(minify())
    .pipe(rename(config.css.min))
    .pipe(gulp.dest(config.css.dist))
  }