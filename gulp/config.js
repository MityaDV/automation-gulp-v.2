const path = require('path'); // Получаем доступ к модулю node.js для работы с путями

const root = path.join(__dirname, `../`); // путь в корень сборки
const src = path.join(root, `src`); // путь в папку src

module.exports = {
  root,
  src,
  dist: path.join(root, `/build`),
  fonts: path.join(src, `/fonts/**/*.{woff,woff2}`),
  img: path.join(src, `/img/**/*.{png,jpg,svg}`),
  imgRaster: path.join(src, `/img**/*.{png,jpg}`),
  video: path.join(src, `/video**/*.{mp4,webm}`),
  html: path.join(src, `/*.html`),
  libs: path.join(src, `/libs/**/*.{js,css}`),
  pug: {
    pages: path.join(src, `/pages/*.pug`),
    components: path.join(src, `/pages/**/*.pug`)
  },
  css: {
    src: path.join(src, `/sass/style.scss`),
    watch: path.join(src, `sass/**/*.scss`),
    dist: path.join(root, `/build/css`),
    min: `style.min.css`
  },
}
