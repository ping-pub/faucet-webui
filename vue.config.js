module.exports = {
  productionSourceMap: false,
  css: {
    extract: false
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:1317',
        changeOrigin: true,
        pathRewrite: { ['^/api']: '' },
        router: function (req) {
          console.log(req.headers.server)
          return req.headers.server;
        }
      },
    }
  }
}
