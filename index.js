var host = process.env.HOST || '67.207.92.73'
var port = process.env.PORT || 443

var cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
    originWhitelist: [],
    httpsOptions: require('./ssl.js')
}).listen(port, host, function() {
    console.log('Running preprint proxy on ' + host + ':' + port)
})

