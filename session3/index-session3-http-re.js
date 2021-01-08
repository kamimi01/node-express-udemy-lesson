const http = require("http")

const server = http.createServer()

// text/plainをレスポンスする
server.on("request", (request, response) => {
  // レスポンスヘッダ
  const data = "Hello World"
  response.writeHead(200, {
    // 戻り値の指定をすることが多い
    "Content-Length": Buffer.byteLength(data),
    "Content-Type": "text/plain"
  })
  // レスポンスボディ
  response.write(data, "utf8")
  // 必ずendを呼ぶ
  response.end()
})

server.listen(3000)
