const http = require('http2');
const pid = process.pid;


http.createServer((req, res) => {
    for (let i = 0; i<1e7; i++);
    res.end(`handled by process ${pid}`);
}).listen(8080, ()=> {
    console.log(`Started process ${pid}`);
});



