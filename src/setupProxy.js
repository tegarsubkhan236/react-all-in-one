const {createProxyMiddleware} = require('http-proxy-middleware')

const proxy = {
    target : "https://cinnabar.icaksh.my.id",
    changeOrigin: true
}
module.exports = function (app) {
    app.use(
        '/api/public/daily/wiki',
        createProxyMiddleware(proxy)
    )
}
