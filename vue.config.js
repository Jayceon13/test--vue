const { defineConfig } = require('@vue/cli-service')
module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
  },
};
