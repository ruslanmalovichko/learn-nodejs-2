var net = require('net');
var fs = require('fs');

const unixsocket = '/tmp/learning.sock';

var server = net.createServer(function(conn) {
   console.log('connected'); // on querry from client

   conn.on('data', function (data) {
      conn.write('Repeating: ' + data); // Send data to from file to client as result
   });

   conn.on('close', function() {
        console.log('client closed connection'); // If client cloced connection, but server runs
   });

}).listen(unixsocket);

server.on('listening', function() {
    console.log('listening on ' + unixsocket); // On run server
});



// if exit and restart server, must unlink socket
server.on('error',function(err) {
   if (err.code == 'EADDRINUSE') {
      fs.unlink(unixsocket, function() {
          server.listen(unixsocket);
      });
   } else {
      console.log(err);
   }
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

