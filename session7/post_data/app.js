const express = require("express")
const app = express()

// 第二引数に、テンプレートのエンジンを入れる
app.set("view engine", "ejs")

// 以前はbody-parserをインストールする必要があったが、expressv4.16.0以降、同じ機能がbody-parserなしで使用可能になった
// HTTPリクエストのボディ部をJSONとして解釈し、req.body に読み取った値がセット
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  // 第一引数は、デフォルトではviewsフォルダからの相対パスになる。（アプリケーションの
  // ルートにあることが想定される）絶対パスを入れることも可能
  // 第二引数は、テンプレートに渡したいデータ
  res.render("./index.ejs")
})

app.post("/", (req, res) => {
  res.send("OK")
})

app.listen(3000)
