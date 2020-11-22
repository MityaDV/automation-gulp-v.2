module.exports = {
  dist: `build`,
  src: `src`,
  fonts: `src/fonts/**/*.{woff,woff2}`,
  video: `src/video**/*.{mp4,webm}`,
  html: `src/*.html`,
  libs: `src/libs/**/*.{js,css}`,
  pug: {
    pages: `src/pages/*.pug`,
    components: [`src/pages/**/*.pug`, `!src/pages/email/**/*.pug`],
    inlineCss: [`!src/pages/**/*.pug`, `src/pages/email/**/*.pug`]
  },
  css: {
    src: `src/sass/style.scss`,
    watch: `src/sass/**/*.scss`,
    inlineCss: `src/email-style/**/*.css`,
    dist: `build/css`,
    min: `style.min.css`
  },
  js: {
    src: `src/js/main.js`,
    srcLibs: `src/libs/**/*.js`,
    watch: `src/js/**/*.js`,
    mode: `iife`,
    dist: `build/js/`,
    distLibs: `build/js/`
  },
  sprite: {
    src: `src/img/icons-sprite/*.svg`,
    dist: `build/img/sprite`,
    name: `sprite.svg`
  },
  svg: {
    src: `src/img/icons/*.svg`,
    dist: `build/img`
  },
  img: {
    src: `src/img/**/*.{png,jpg,svg}`,
    srcRasterImg: `src/img/**/*.{png,jpg}`,
    dist: `build/img`
  },
  json: {
    src: `src/json/*.json`,
    dist: `build/json`
  }
}
