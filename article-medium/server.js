const express = require('express');
const http = require('http');
const app = express();



app.get('/', function (req, res) {
    console.log('Hello homepage');
    setTimeout(reply, 3000);
    function reply() {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello');
    }
});

app.get('/test', function (req, res) {
    console.log('Start Cluster test page-------');
    setTimeout(() => {
        console.log('End Cluster test page-------');
        res.status(200);
        return res.send('Cluster test page-------');
    }, 1000);
});

http.createServer(app).listen(8888, () => {
    console.log(`App run on 8080`);
});
