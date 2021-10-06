'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

class InputChecker extends eventEmitter {

   constructor(name, file) { // get Shelley, output at start

      console.log('Ruslan 3');
      console.log(name);
      console.log('Ruslan 4');

      console.log('Ruslan 5');
      console.log(file);
      console.log('Ruslan 6');

      super() // activate functions from eventEmitter
      this.name = name;

      this.writeStream = fs.createWriteStream('./' + file + '.txt', // open file output.txt for writing
         {'flags' : 'a',
          'encoding' : 'utf8',
          'mode' : 0o666});
      }

   check (input) {
      console.log('Ruslan 1');
      console.log(input);
      console.log('Ruslan 2');
      let command = input.toString().trim().substr(0,3);
      if (command == 'wr:') {
        this.emit('write',input.substr(3,input.length));
      } else if (command == 'en:') {
        this.emit('end');
      } else {
        this.emit('echo',input);
      }
   }
};

exports.InputChecker = InputChecker;

