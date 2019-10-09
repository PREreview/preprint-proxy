var fs = require('fs')

module.exports = {
  key: fs.readFileSync('/etc/letsencrypt/live/preprint-proxy.prereview.org/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/preprint-proxy.prereview.org/cert.pem')
}
