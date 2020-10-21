module.exports = {
  transpileDependencies: ['common'],
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'qiankun-demo'
      return args
    })
  },
}
