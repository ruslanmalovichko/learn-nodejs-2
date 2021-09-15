var eventEmitter = require('events').EventEmitter;
var counter = 0;

var em = new eventEmitter();

setInterval(function() { em.emit('timed', counter++); }, 3000); // Every 3 second call timed with counter + 1 after finish timed

em.on('timed', function(data) {
  console.log('timed ' + data);
});
