let {createProxyMiddleware}= require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware('/inex',{
        target:'http://localhost:4500',
        changeOrigin:true,
        pathRewrite:{
            '/inex':''
        }
    }))
}