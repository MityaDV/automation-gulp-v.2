module.exports = {
  dist: `build`,
  src: `src`,
  fonts: `src/fonts/**/*.{woff,woff2}`,
  img: `src/img/**/*.{png,jpg,svg}`,
  imgRaster: `src/img**/*.{png,jpg}`,
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
  }
}
