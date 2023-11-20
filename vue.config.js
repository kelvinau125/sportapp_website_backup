const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // proxy: 'https://www.mindark.cloud:8080/'
    proxy: 'http://192.168.0.41:8080/'
  }
};