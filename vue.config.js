const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
      extract: false,
  },
configureWebpack: {
    optimization: {
        splitChunks: false,
    },
    output: {
        filename: 'apps.js',
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
    },
},
})
