const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.status(200).render(
    // 本来であれば、viewsフォルダがルート直下にあれば、第一引数は"index.ejs"のみで問題ないが、ここでは絶対パスを使用する
    "/Users/mikaurakawa/Desktop/Web_Projects/node-express-udemy-lesson/session6/many_templates/views/index.ejs",
    { title: "webアプリケ−ション" }
  )
})

app.listen(3000)
