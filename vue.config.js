const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    output: {
        filename: 'apps.js',
    },
  css: {
      extract: false,
  },
configureWebpack: {
    optimization: {
        splitChunks: false,
    },
},
})
