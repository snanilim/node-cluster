var http = require('http');

http.createServer(function(req, res) {
    setTimeout(() => {
        console.log('server run');
    }, 1000);
    console.log('late run');
  res.writeHead(200);
  res.end("hello world");
}).listen(8080);