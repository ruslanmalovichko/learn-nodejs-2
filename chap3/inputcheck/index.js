var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

exports.InputChecker = InputChecker;

function InputChecker(name, file) {
   this.name = name;
   this.writeStream = fs.createWriteStream('./' + file + '.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0666});
};

util.inherits(InputChecker,eventEmitter); // Add emitter to class methods
InputChecker.prototype.check = function (input) {
  // trim extraneous white space
  var command = input.toString().trim().substr(0,3);
  // get first 3 symbols, for example wr:
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

