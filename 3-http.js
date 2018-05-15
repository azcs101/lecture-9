const http = require('http');

const handle = function(req, res) {
    res.statusCode = 500;
    res.end('Hello');
}

const server = http.createServer(handle);

server.listen(3000);
