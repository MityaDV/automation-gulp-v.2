const config = require(`../config`);
const del = require(`del`);

module.exports = function clean(cb) {
  return del(config.dist).then(() => {
    cb()
  })
}