var spawn = require('child_process').spawn;
var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

// connect to TCP server
client.connect ('3000','localhost', function() { // connect to server in example10-3.js, created by net module
    console.log('connected to server');
});

// start child process
var logs = spawn('tail', ['-f', // show latest and new logs from /var/log/auth.log
  '/var/log/auth.log'
]);

// process child process data
logs.stdout.setEncoding('utf8'); // change encoding for logs, because its string text
logs.stdout.on('data', function(data) { // in data: get strings text from logs, program tail
   // console.log('Ruslan 1');
   // console.log(data);
   // console.log('Ruslan 2');

   // resource URL
   var re = /ruslan/g;

   // graphics test
   var re2 = /closed/;

   // extract URL
   var parts = re.exec(data); // find text with regular expression re
   // console.log('Ruslan 3');
   // console.log(parts['input']);
   // console.log('Ruslan 4');

   // look for image and if found, store  
   var tst = re2.test(parts['input']); // if text contains re2, return true

   // console.log('Ruslan 5');
   // console.log(tst);
   // console.log('Ruslan 6');

   if (tst) {
      client.write(parts['input']); // send data to client
   }
});
logs.stderr.on('data', function(data) {
   console.log('stderr: ' + data);
});

logs.on('exit', function(code) {
   console.log('child process exited with code ' + code);
   client.end();
});

