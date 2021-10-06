var net = require('net');
const PORT = 8124;

var server = net.createServer(function(conn) {
   console.log('connected'); // on querry from client

   conn.on('data', function (data) {
      console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort); // Show data and connection info
      conn.write('Repeating: ' + data); // Send data to from file to client as result
   });

   conn.on('close', function() {
        console.log('client closed connection'); // If client cloced connection, but server runs
   });

}).listen(PORT);

server.on('listening', function() {
    console.log('listening on ' + PORT); // On run server
});

server.on('error', function(err){
  if (err.code == 'EADDRINUSE') {
    console.warn('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT);
    }, 1000);
  }
  else {
    console.error(err);
  }
});

// Send file: nc localhost 8124 < mydata.txt

