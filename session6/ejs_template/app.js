const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const data = {
    items: [{ name: "<b>佐藤</b>" }, { name: "鈴木" }, { name: "高橋" }],
  }
  res.render(
    "/Users/mikaurakawa/Desktop/Web_Projects/node-express-udemy-lesson/session6/ejs_template/views/index.ejs",
    data
  )
})

app.listen(3000)
