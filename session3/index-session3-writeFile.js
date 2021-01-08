// ファイル読み込みモジュール
const fs = require("fs")
const data = "こんにちは"

// hello.txtファイルが作成される
// 第一引数：ファイル名、第二引数：書き込みデータ、第三引数：コールバック関数（関数の中で実行される関数のこと）
fs.writeFile("./data/hello.txt", data, (error) => {
  if (error) {
    console.log(error.message)
    return
  }

  console.log("書き込み完了")
})