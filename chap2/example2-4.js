var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
   console.log('request event'); // On open page

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
});

server.on('connection', function() {
   console.log('connection event'); // On open page
});

server.listen(8124, function() {
   console.log('listening event'); // On start
});

console.log('Server running on port 8124'); // On start

