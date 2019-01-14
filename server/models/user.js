var collection = require('../connectDB').collection

/**
 * 查找数据
 */
exports.find = (collectionName, params, args, callback) => {
  collection((err, db) => {
    db.db('myTest').collection(collectionName).find(params).toArray((err, data) => {
      console.log(data);
      callback(err, data)
      db.close();
      console.log('数据库已关闭！');
    })
  })
}

/*MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {//连接数据库
  if (err) throw err;
  console.log("数据库已创建!");
  const collection = db.db("myTest").collection("testTable");

  //增
  //collection.save({
  //name:"张三",
  //age:19
  // },(err,result)=>{
  //    db.close()
  //})

  //删
  // collection.remove({
  //     name:"张三"
  // },()=>{
  //     db.close();
  // })

  //改
  // collection.update({
  //     goodsName:"香蕉"
  // },{
  //     $set:{num:1000000}
  // },()=>{
  //     db.close();
  // })

  //查
  collection.find().toArray((err, data) => {
    console.log(data);
    db.close();
  })

  db.close();
})*/
