const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require('gulp-plumber')
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require('autoprefixer')
const objectFit = require(`postcss-object-fit-images`);
const rename = require("gulp-rename")
// const minify = require(`gulp-csso`);
const cleanCSS = require('gulp-clean-css')

module.exports = function styles() {
  return gulp
    .src(config.css.src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), objectFit()]))
    .pipe(gulp.dest(config.css.dist))
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(rename(config.css.min))
    .pipe(gulp.dest(config.css.dist));
  }