# MongoDBについて

## インストール

1. homebrewでインストールする
   `brew tap mongodb/brew`
   `brew install mongodb-community`

## 各種コマンド

- サービスの起動・停止
  `brew services start mongodb-community@4.0`
  `brew services stop mongodb-community@4.0`

- DBの保存先
  `/usr/local/etc/mongod.conf`
  - DBの格納先やログの格納先が記載してある
  
- サーバ接続
  `mongo`
- サーバ切断
  `exit`

- 認証のかかったDBへのアクセス方法
  `mongo -u <ユーザ名> -p <パスワード> -authenticationDatabase <DB名>`

- ユーザを変更してログイン
  `db.auth("admin", <パスワード>)`

## 参考
- mongo4.x以降では、DB名変更方法が異なる
  - 参考
    - [Remove Support for the copydb and clone Commands
](https://docs.mongodb.com/manual/release-notes/4.2-compatibility/#remove-support-for-the-copydb-and-clone-commands)

- GUIツール
  - [Mongo Compass](https://dev.classmethod.jp/articles/introducing-mongodb-compass/)

- [Mongo Shellのドキュメント](https://docs.mongodb.com/manual/mongo/)
- [ドライバー(Node.js用)](https://docs.mongodb.com/drivers/node/quick-start)
- [MongoDBのクエリ](https://docs.mongodb.com/manual/reference/operator/query/)