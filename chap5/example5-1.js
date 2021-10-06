var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(8124);

server.on('request', function(request,response) {

   if (request.method == 'POST') {
        var body = '';

        // append data chunk to body
        request.on('data', function (data) {
            console.log('Ruslan 1');
            console.log(data.toString());
            console.log('Ruslan 2');
            body += data;
        });

        // data transmitted
        request.on('end', function () {
            var post = querystring.parse(body);
            console.log('Ruslan 3');
            console.log(post);
            console.log('Ruslan 4');
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello World\n');
        });
    }
});
console.log('server listening on 8214');

