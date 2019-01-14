var MongoClient = require('mongodb').MongoClient;  //引入mongodb
var url = 'mongodb://localhost:27017/myTest';      //mongodb的数据库地址

exports.collection = (callback) => {
  MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
    if (err) throw err;
    console.log("数据库已连接!");
    // const collection = db.db("myTest").collection("testTable");
    callback(err, db);
  })
}

