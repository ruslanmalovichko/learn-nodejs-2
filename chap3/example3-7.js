var fs = require('fs'),
    async = require('async');

async.parallel({
   data1 : function (callback) {
      fs.readFile('./data/fruit1.txt', 'utf8', function(err, data){
           callback(err,data);
       });
   },
   data2 : function (callback) {
      fs.readFile('./data/fruit2.txt', 'utf8', function(err, data){
           callback(err,data);
       });
   },
   data3 : function readData3(callback) {
      fs.readFile('./data/fruit3.txt', 'utf8', function(err, data){
           callback(err,data);
       });
   },
}, function (err, result) { // result store data1, data2 and data3
      if (err) {
         console.log(err.message);
      } else {
         console.log('Ruslan 1');
         console.log(result);
         console.log('Ruslan 2');
      }
});

