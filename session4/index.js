// モジュールを呼び出す
// (function () {
//   const module = require("./module-1.js")
//   // 関数を実行
//   module()
// })()

// 文字列を出力
// (function () {
//   const module = require("./module-2.js")
//   console.log("🚀 ~ file: index.js ~ line 10 ~ module", module)
// })()

// オブジェクトを出力
// (function () {
//   const module = require("./module-3.js")
//   console.log(module.square())
// })()

// クラスを実行
// (function() {
//   const Square = require("./module-4.js")
//   // インスタンス の作成
//   const obj = new Square()
//   console.log(obj.area())
// })()

// クラスを2つ出力
(function () {
  const { Square, Triangle } = require("./module-5.js")
  // Squareのクラスを
  const obj1 = new Square()
  console.log(obj1.area())
  const obj2 = new Triangle()
  console.log(obj2.are())
})()
