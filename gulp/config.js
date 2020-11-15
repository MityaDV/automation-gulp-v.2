// const path = require('path'); // Получаем доступ к модулю node.js для работы с путями

// const root = path.join(__dirname, `../`); // путь в корень сборки
// const src = path.join(root, `src`); // путь в папку src

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
}
