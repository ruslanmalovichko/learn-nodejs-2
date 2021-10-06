var fs = require('fs');
var concat = require('./external.js').concatArray;

var test = 10;
var second = 'test';

for (var i = 0; i <= test; i++) {
   debugger;
   second+=i;
}

setTimeout(function() {
   debugger;
   test = 1000;
   console.log(second);
}, 1000);

fs.readFile('./log.txt', 'utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }

   var arry = ['apple','orange','strawberry'];
   var arry2 = concat(data,arry);
   console.log(arry2);
});

// Start debug: node inspect debugtest

// Show code: list(25)

// Set breakpoint: sb(19)
// sb('external.js', 3)

// Watch variables: watch('test');
// watch('second');
// watch('data');
// watch('arry2');

// Continue: cont
// c

// List loaded files with scripts: scripts

// Show V8 version: version

// Clear Breakpoint: cb('debugtest.js', 19)
// Unwatch variable: unwatch('second')

// Set breakpoint in current line: sb()

// Next: next
// n

// Step: step
// s

// Currently doesn't clear: bt, out, o

