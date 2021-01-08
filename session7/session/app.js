const express = require("express")
const session = require("express-session")
const app = express()

app.set("view engine", "ejs")

// セッションに関するミドルウェア
app.use(
  session({
    // クッキーへ保存するさいの暗号化キー
    secret: "qwerty",
    // セッション情報の更新有無にかかわらずサーバー情報を更新するかどうか
    resave: false,
    // 初期化されていない新規セッションを保存するかどうか
    saveUninitialized: true,
    // クッキーへ保存する際のキー名
    name: "sid",
  })
)

app.get("/", (req, res) => {
  const count = req.session.count || 0
  req.session.count = count + 1
  res.render(
    "/Users/mikaurakawa/Desktop/Web_Projects/node-express-udemy-lesson/session7/session/views/index.ejs",
    { count }
  )
})

app.listen(3000)
