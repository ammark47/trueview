const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            pathRewrite: {
                '/api': ''
            },
            logLevel: 'debug'
            // changeOrigin: true
        })
    )
    app.use(
        '/db', 
        (req,res,next) => {console.log(req.path); next()},
        createProxyMiddleware({
            target: 'http://localhost:8080',
            pathRewrite: {
                '/db': ''
            }
            // changeOrigin: true
        })
    )
}
