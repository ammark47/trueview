const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/chat', 
        createProxyMiddleware({
            target: 'http://localhost:4000',
            // changeOrigin: true
        })
    )
    app.use(
        '/db', 
        createProxyMiddleware({
            target: 'http://localhost:8080',
            pathRewrite: {
                '/db': ''
            }
            // changeOrigin: true
        })
    )
}
