var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');

// connect to server
client.connect ('/tmp/learning.sock', function () {
   console.log('connected to server'); // On connection to server
   client.write('Who needs a browser to communicate?'); // Send this message to server as data
});

// when receive data, send to server
process.stdin.on('data', function (data) {
   client.write(data); // Send cli text to server as data
});

// when receive data back, print to console
client.on('data',function(data) {
   console.log(data); // When client get answer text with "Repeating: " and print it in cli
});

// when server closed
client.on('close',function() {
   console.log('connection is closed'); // If server closes, show this message
});

client.on('error', function(e) {
   console.error(e);
});

