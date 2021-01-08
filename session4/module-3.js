const module1 = require("./module-1")

module.exports = {
  width: 10,
  height: 10,
  square: function () {
    return this.width * this.height
  },
}
