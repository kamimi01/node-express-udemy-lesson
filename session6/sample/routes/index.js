const router = require("express").Router()

router.get("/", (req, res) => {
  res.render(
    "/Users/mikaurakawa/Desktop/Web_Projects/node-express-udemy-lesson/session6/sample/views/index.ejs"
  )
})

module.exports = router
