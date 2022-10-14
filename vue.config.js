const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
      extract: false,
  },
        entry: {
            app: './src/test.js',
        },
        output: {
            filename: 'test.js',
            path: __dirname + '/dist'
        },
            configureWebpack: {
    optimization: {
        splitChunks: false,
    },
    output: {
        filename: 'apps.js',
    },

},
}
)
