// // モジュールを読み込む
// const os = require("os")

// // 現在実行中のプラットフォームを表示する
// console.log(os.platform())

// // 引数：processを確認する
// for (let i = 0, max = process.argv.length; i < max; i++) {
//   console.log(`${i}: ${process.argv[i]}`)
// }

// // 環境変数：envを確認する（Macでは export -p のコマンドで確認できる）
// for (let key in process.env) {
//   console.log(`${key}: ${process.env[key]}`)
// }

// // 現在のワークディレクトリを取得
// console.log(process.cwd())

// 実行しているファイルのパスに変更したい
const path = require("path")

const sourceFilePath = process.argv[1]
const sourceFileDire = path.dirname(sourceFilePath)

console.log(process.cwd())
// 現在のディレクトリを変更する
// process.chdir(path.dirname(process.argv[1]))
// もっと短い物もある（グローバル変数）
process.chdir(__dirname)
console.log(process.cwd())