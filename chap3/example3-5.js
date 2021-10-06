var fs = require('fs'),
    async = require('async');

async.waterfall([
   function readData(callback) {
      fs.readFile('./data/data1.txt', 'utf8', function(err, data){ // read "This is somecompany.com"
        console.log('Ruslan 1');
        console.log(data);
        console.log('Ruslan 2');
           callback(err,data);
       });
   },
   function modify(text, callback) { // get "This is somecompany.com"
      console.log('Ruslan 3');
      console.log(text);
      console.log('Ruslan 4');

      var adjdata=text.replace(/somecompany\.com/g,'burningbird.net');
      callback(null, adjdata);
   },
   function writeData(text, callback) { // get changed text "This is burningbird.net"
      console.log('Ruslan 5');
      console.log(text);
      console.log('Ruslan 6');

       fs.writeFile('./data/data1.txt', text, function(err) {
          callback(err,text);
       });
   }
], function (err, result) {
      if (err) {
        console.log(err.message);
      } else {
        console.log(result);
      }
});

