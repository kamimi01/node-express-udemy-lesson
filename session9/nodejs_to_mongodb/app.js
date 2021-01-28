const MongoClient = require("mongodb").MongoClient

const url = "mongodb://localhost:27017/"

MongoClient.connect(url, (error, client) => {
  const db = client.db("sample")
  db.collection("products", (error, collection) => {
    collection.deleteMany({ name: /e/g }, (error, result) => {
      client.close()
    })
  })
})
