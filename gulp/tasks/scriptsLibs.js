const config = require(`../config`);
const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const concat = require(`gulp-concat`);
const uglify = require(`gulp-uglify`);
const rename = require(`gulp-rename`);

module.exports = function scriptsLibs() {
  return gulp
    .src(config.js.srcLibs)
    .pipe(plumber())
    .pipe(concat(`vendor.js`))
    .pipe(uglify())
    .pipe(rename({ suffix: `.min` }))
    .pipe(gulp.dest(config.js.distLibs));
}