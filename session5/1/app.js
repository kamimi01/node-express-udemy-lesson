const express = require("express")
const app = express()

// ミドルウェアを使用する
app.use(require("./logger"))

// このreqはhttpモジュールの拡張
app.get("/users/:id*", (req, res) => {
  // 以下がhttpのモジュールの書き方（このままでも動くがexpressの書き方がある）
  // res.writeHead(200)
  // res.write("hello world")
  // res.end()

  // expressの書き方
  // ステータス200で"hello world"を返す
  res.status(200).send("hello world")
})
app.listen(3000)
