var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var currentTime = new Date();
    res.end('Hello, Dallas it is ' + currentTime + '</br>[helloworld sample; iisnode version is ' +
      process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT);
