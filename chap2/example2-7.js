"use strict";

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker (name, file) {
   this.name = name;
   this.writeStream = fs.createWriteStream('./' + file + '.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0o666});
};

util.inherits(InputChecker,eventEmitter); // Add emitter to class methods

InputChecker.prototype.check = function check(input) {

  // trim extraneous white space
  let command = input.trim().substr(0,3); // get first 3 symbols, for example wr:

  // process command
  // if wr, write input to file
  if (command == 'wr:') {
    console.log('Ruslan 1');
    console.log(input);
    console.log('Ruslan 2');
     this.emit('write',input.substr(3,input.length)); // emit write and send text without first 3 symbol

  // if en, end process
  } else if (command == 'en:') {
     this.emit('end');

  // just echo back to standard output
  } else {
     this.emit('echo',input);
  }
};

// testing new object and event handling
let ic = new InputChecker('Shelley','output');

ic.on('write', function(data) {
    console.log('Ruslan 3');
    console.log(data);
    console.log('Ruslan 4');
 
   this.writeStream.write(data, 'utf8');
});

ic.on('echo', function( data) {
   process.stdout.write(ic.name + ' wrote ' + data);
});

ic.on('end', function() {
   process.exit();
});

// capture input after setting encoding
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  console.log('Ruslan 5');
   let input = process.stdin.read();
   if (input !== null)
      ic.check(input);
});

