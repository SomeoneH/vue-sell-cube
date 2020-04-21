// 用node.js起的服务
const express = require('express')
const app = express()

const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

const router = express.Router() // 通过express.Router()进行路由代理
router.get('/seller', function(req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})
router.get('/goods', function(req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
router.get('/ratings', function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api', router)
app.use(express.static('./dist'))

const port = process.env.PORT || 3000 // 启动服务器的时候如果没传PORT，就默认用3000的端口
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
