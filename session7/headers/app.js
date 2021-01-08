const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  // ヘッダの取得
  // getの引数は大文字小文字の区別なしで便利！
  console.log(req.get("user-agent"))

  // ヘッダをレスポンスに設定
  // クライアントにキャッシュさせない設定
  res.set("Cache-Control", "no-cache")
  res.set("Pragma", "no-cache")
  res.render(
    "/Users/mikaurakawa/Desktop/Web_Projects/node-express-udemy-lesson/session7/headers/views/index.ejs"
  )
})

app.listen(3000)