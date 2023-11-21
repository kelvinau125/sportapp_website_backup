const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // proxy: 'https://www.mindark.cloud:8080/'
    proxy: 'http://202.75.51.63:8080/'
  }
};