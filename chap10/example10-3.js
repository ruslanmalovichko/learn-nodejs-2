var net = require('net');
var redis = require('redis');

var server = net.createServer(function(conn) {
   console.log('connected');

   // create Redis client
   var client = redis.createClient();

   client.on('error', function(err) {
     console.log('Error ' + err);
   });

   // sixth database is image queue
   // client.select(6); // Select database
   // listen for incoming data
   conn.on('data', function(data) { // data: get string text from client
      console.log(data + ' from ' + conn.remoteAddress + ' ' +
        conn.remotePort);

      // store data
      client.rpush('images', data); // save string to redis database
      client.lrange('images', 0, -1, redis.print); // get data from database
   });

}).listen(3000);
server.on('close', function(err) {
   client.quit();
});

console.log('listening on port 3000');

