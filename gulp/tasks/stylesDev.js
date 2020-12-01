const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sourcemaps = require(`gulp-sourcemaps`);
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const objectFit = require(`postcss-object-fit-images`);
const rename = require(`gulp-rename`);
const server = require(`browser-sync`).create();

module.exports = function stylesDev() {
  return gulp
    .src(config.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), objectFit()]))
    .pipe(gulp.dest(config.css.dist))
    .pipe(rename(config.css.min))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.css.dist))
    .pipe(server.stream());
  }
