const config = require(`../config`);
const gulp = require(`gulp`);
const pug = require(`gulp-pug`);
const plumber = require(`gulp-plumber`);
const pugLinter = require(`gulp-pug-linter`);
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')

module.exports = function pug2Html() {
  return gulp
    .src(config.pug.pages)
    .pipe(plumber())
    .pipe(pugLinter({reporter: `default`}))
    .pipe(pug({ pretty: true }))
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest(config.dist));
}
