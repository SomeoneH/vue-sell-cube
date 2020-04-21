const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

function resolve(dir) {
  return path.join(__dirname, dir) // __dirname是项目目录地址
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // 内置属性，配置开发环境的数据请求
  devServer: {
    before(app) {
      app.get('/api/seller', function (req,res) {
        const id = req.query.id
        res.json({
          errno: 0,
          // data: seller
          data: Object.assign({}, seller, { id }) // 对seller的数据进行拼接，加入id
        })
      })
      app.get('/api/goods', function (req,res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function (req,res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
    // 对moment组件进行配置，避免遍历全部的语言，造成项目体积过大
    config
      .plugin('context')
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
  }
}
