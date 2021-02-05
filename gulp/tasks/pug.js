const gulp = require('gulp');
const config = require('../config');
const plumber = require('gulp-plumber');
const data = require('gulp-data');
const fs = require('fs');
const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');
// const htmlValidator = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');

module.exports = function pug2Html() {
  return gulp
    .src(config.pug.src)
    .pipe(plumber())
    .pipe(
      data(() => {
        return JSON.parse(fs.readFileSync(config.data.src));
      })
    )
    .pipe(pugLinter({reporter: 'default'}))
    .pipe(pug({ pretty: true }))
    // .pipe(htmlValidator())
    // .pipe(htmlValidator.reporter())
    .pipe(bemValidator())
    .pipe(gulp.dest(config.dist));
}
