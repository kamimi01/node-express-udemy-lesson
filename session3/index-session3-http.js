const http = require("http")

// サーバーを生成する
http.createServer((request, response) => {
  // レスポンス
  response.writeHead(200, {"Content-Type": "text/plain"})
  // 必ずendを書く
  // 引数にtext/plainを描ける
  response.end("Hello World 1.")
}).listen(3000)