const path = require('path'); // Получаем доступ к модулю node.js для работы с путями

const root = path.join(__dirname, `../`); // путь в корень сборки
const src = path.join(root, `src`); // путь в папку src

module.exports = {
  root,
  src,
  dist: path.join(root, '/build'),
  pug: {
    pages: path.join(src, '/pages/*.pug')
  }
}
