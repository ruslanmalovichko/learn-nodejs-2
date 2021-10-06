var http = require('http');
var zlib = require('zlib');
var fs = require('fs');

var server = http.createServer().listen(8124);

server.on('request', function(request,response) {

   if (request.method == 'POST') {
      console.log('Ruslan 1');
      console.log(request.method);
      console.log('Ruslan 2');

      var chunks = [];

      request.on('data', function(chunk) { // chunk stores test.png compressed
         chunks.push(chunk);
         // console.log('Ruslan 3');
         // console.log(chunk);
         // console.log('Ruslan 4');
      });

      request.on('end', function() {
         var buf = Buffer.concat(chunks);
         // console.log('Ruslan 5');
         // console.log(buf);
         // console.log('Ruslan 6');

         zlib.unzip(buf, function(err, result) { // result stores test.phg uncompressed
            if (err) {
               response.writeHead(500);
               response.end();
               return console.log('error ' + err);
            }

            // console.log('Ruslan 7');
            // console.log(result);
            // console.log('Ruslan 8');

            var timestamp = Date.now();
            var filename = './done' + timestamp + '.png';
            fs.createWriteStream(filename).write(result);
         });

         response.writeHead(200, {'Content-Type': 'text/plain'});
         response.end('Received and undecompressed file\n'); // send message to client
      });
   }
});

console.log('server listening on 8214');

