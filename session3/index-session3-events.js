// EventEmitterクラスを取得する
const EventEmitter = require("events").EventEmitter
const util = require("util")

// 親クラス
const Animal = function() {
 EventEmitter.call(this)
}
// EventEmitterを継承
util.inherits(Animal, EventEmitter)

Animal.prototype.message = "qwert"
Animal.prototype.say = function() {
  console.log(this.message)
  // 第一引数は発火するイベント、第二引数はlistener
  this.emit("say", this.message)
}

const Dog = function() {
  // 親クラスのコンストラクタを呼ぶ
  Animal.call(this)
  this.message = "ワンワン"
}

// 第一引数に子クラス、第二引数に親クラス
// 非推奨の継承方法！
util.inherits(Dog, Animal)

const dog = new Dog()
// 発火したときに行うイベントの処理
dog.on("say", function(message) {
  console.log(`「${message}」と叫んだ`)
})
dog.say();