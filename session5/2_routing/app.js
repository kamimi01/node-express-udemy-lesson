const express = require("express")
const app = express()

// METHOD
// 第一引数はパス、正規表現を使用可能
// 第二引数はこのパスにきた場合の処理（=コールバック関数と呼ばれる）
// app.get("/users/:id?", (req, res) => {
//   console.log(req.params.id)
//   res.status(200).send("OK")
// })

// ミドルウェアrouterを使用する
app.use("/user", require("./user.js"))

app.listen(3000)