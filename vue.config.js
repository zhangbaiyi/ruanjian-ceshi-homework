const { defineConfig } = require('@vue/cli-service')
module.exports = {
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
