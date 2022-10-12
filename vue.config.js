const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    //...
    optimization: {
      splitChunks: false,
    },
})
