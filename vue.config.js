const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '《软件测试》练习题'
        return args
      })
  }，
  devServer:{
    proxy:{
      '/api':{
        target:'http://45455y44y2.qicp.vip',
        changeOrigin :true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
