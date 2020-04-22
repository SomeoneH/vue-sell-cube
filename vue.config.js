const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

function resolve(dir) {
  return path.join(__dirname, dir) // __dirname是项目目录地址
}

// // 导入compression-webpack-plugin
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// // const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const externals = {
//   'vue': 'Vue',
//   'vue-router': 'VueRouter',
//   'vuex': 'Vuex',
//   'axios': 'axios',
//   'ELEMENT': 'element-ui'
// }
// // 定义压缩文件类型
// const productionGzipExtensions = ['js', 'css']

module.exports = {
  // publicPath: '/vue-qiugu-ms/', //基本路径
  // outputDir: 'dist',
  // productionSourceMap: false,
  // assetsDir: 'static',
  // filenameHashing: true,
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: "src/main.js",
  //     // 模板来源
  //     template: "public/index.html", // 这里用来区分加载那个 html
  //     // 在 dist/index.html 的输出
  //     filename: "index.html",
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ["chunk-vendors", "chunk-common", "index"]
  //   }
  // },
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
