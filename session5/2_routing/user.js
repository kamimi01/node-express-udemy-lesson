// アプリケーションが大きくなると、ルーティングを外出しすることを検討する必要がある
// Routerメソッドがあるので、それを使用する
const router = require("express").Router()

// メソッドにかかわらずログの出力
router.use((req, res, next) => {
  // アクセスしてきた日付を取得する
  console.log(new Date().toISOString())
  next()
})

// /user/
router.get("/", (req, res) => {
  // res.send("/")
  // res.status(200).send("dame")
  const data = {
    test: "test"
  }
  res.status(200).send(data)
})

// /user/about
router.get("/about", (req, res) => {
  res.send("/about")
})

module.exports = router
