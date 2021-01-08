const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render(
    "/Users/mikaurakawa/Desktop/Web_Projects/node-express-udemy-lesson/session7/query/views/index.ejs"
  )
})

app.listen(3000)