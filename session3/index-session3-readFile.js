// ファイル読み込みモジュール
const fs = require("fs")

// 第一引数：ファイルパス、第二引数：エンコーディング、第三引数：コールバック関数（関数の中で実行される関数）
fs.readFile("./data/sample.json", "utf8", (error, data) => {
  // エラーの場合はメッセージを出力して終了する
  if (error) {
    console.log(error.message)
    return
  }

  console.log(data)
})