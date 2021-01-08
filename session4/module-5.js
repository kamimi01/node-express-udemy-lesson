// Square クラスの作成
const module1 = require("./module-1")

const Square = function (width = 10, height = 10) {
  this.width = width
  this.height = height
}

Square.prototype.width = 10
Square.prototype.height = 10

Square.prototype.area = function () {
  return this.width * this.height
}

// Triangleクラスの作成
const Triangle = function (base = 10, height = 10) {
  this.base = base
  this.height = height
}

Triangle.prototype.are = function () {
  return (this.base * this.height) / 2.0
}

module.exports = {
  Square: Square,
  Triangle: Triangle,
}
