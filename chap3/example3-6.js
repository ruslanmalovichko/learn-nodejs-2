var fs = require('fs'),
    async = require('async'),
    _dir = './data/';

var writeStream = fs.createWriteStream('./log.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0666});

var file = 'data1.txt';

// get list of files
fs.readdir (_dir, function (err, files) {
  // get files array
  console.log(files);

   files.forEach(function(file) {
      // for each file
       processItem(file);
   });
});

function processItem(file) {
   async.waterfall([
      function checkFile(callback) {
       // file store file name
        console.log('Ruslan 1');
        console.log(file);
        console.log('Ruslan 2');

        fs.stat(_dir + file, function(err, stats) {
          callback(err, stats, file); // first arg should be error or null
        });
      },
      function readData(stats, file, callback) { // Last should be callback
        if (stats.isFile())
          // modify contents
          fs.readFile(_dir + file, 'utf8', function(err, data){
            // read file data
            console.log('Ruslan 3');
            console.log(data);
            console.log('Ruslan 4');

            callback(err,file,data);
          });
      },
      function modify(file, text, callback) {
        var adjdata=text.replace(/somecompany\.com/g,'burningbird.net');
        // replace text
          callback(null, file, adjdata);
      },
      function writeData(file, text, callback) {
        // write to file
        fs.writeFile(_dir + file, text, function(err) {
          // write data at file
          callback(err,file);
        });
      },
      function logChange(file, callback) {
        // log write
        writeStream.write('changed ' + file + '\n', 'utf8', 
          function(err) {
            // write changed file name at log file
            callback(err);
          })
      }
    ], function (err, result) {
        if (err) 
           console.log(err);
    }); 
}

