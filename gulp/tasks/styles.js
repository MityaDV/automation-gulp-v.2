const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sourcemap = require(`gulp-sourcemaps`);
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const objectFit = require(`postcss-object-fit-images`);
const rename = require(`gulp-rename`);
const csso = require(`gulp-csso`);
const server = require(`browser-sync`).create();

module.exports = function styles() {
  return gulp
    .src(config.css.src)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), objectFit()]))
    .pipe(gulp.dest(config.css.dist))
    .pipe(csso())
    .pipe(rename(config.css.min))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest(config.css.dist))
    .pipe(server.stream());
  }
