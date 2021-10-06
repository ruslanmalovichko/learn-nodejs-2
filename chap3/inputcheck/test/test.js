// var inputChecker = require('inputcheck').InputChecker;
var inputChecker = require('../index.js').InputChecker;

// testing new object and event handling
var ic = new inputChecker('Shelley','output');

ic.on('write', function(data) {
  console.log('Ruslan 3');
  console.log(data);
  console.log('Ruslan 4');

   this.writeStream.write(data, 'utf8');
});

ic.addListener('echo', function( data) {
   console.log(this.name + ' wrote ' + data);
});

ic.on('end', function() {
   process.exit();
});

// capture input after setting encoding
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    ic.check(input);
});

