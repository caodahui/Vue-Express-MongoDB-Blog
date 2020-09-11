const express = require('express')
require('babel-register');
const path = require('path')
const app = express()
const hero = require('./router/hero')

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(path.join(__dirname, '../dist')))
app.use('/api', hero)

/*app.use('/', (req, res) => {
  res.send('hello express!')
})*/

app.listen(3005, () => {
  console.log('app listening on port 3005.')
})
