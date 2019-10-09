// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '67.207.92.73'

// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 443

var cors_proxy = require('cors-anywhere')

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins for now
    httpsOptions: require('./ssl.js')
}).listen(port, host, function() {
    console.log('Running preprint proxy on ' + host + ':' + port)
})

