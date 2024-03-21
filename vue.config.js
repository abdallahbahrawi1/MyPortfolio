const { defineConfig } = require('@vue/cli-service')

module.exports = {
  chainWebpack: config => {
    defineConfig({
     base:  '/deploying-MyPortfolio',
     transpileDependencies: true
   }),
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[ext]'
      })
      .end();
  },
  publicPath: process.env.NODE_ENV === "production" ? "/MyPortfolio/" : "/",
};