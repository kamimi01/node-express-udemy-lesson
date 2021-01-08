const http = require("http")
const server = http.createServer()

// どんなリクエストかによって処理を分岐する
server.on("request", (req, res) => {
  let data = ""

  // リクエストの分析
  console.log(`METHOD：${req.method}`)
  console.log(`URL:${req.url}`)
  console.log(`HEADER:`)

  // ヘッダはキー・バリュー型でリクエストされる
  for (let key in req.headers) {
    console.log(`${key} : ${req.headers[key]}`)
  }
  req.on("data", (chunk) => {
    data += chunk
  })
  req.on("end", () => {
    console.log(data)
  })

  // レスポンスの作成
  res.end("OK")
})

server.listen(3000)
