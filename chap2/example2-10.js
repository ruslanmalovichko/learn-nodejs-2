var fs = require('fs');
var writeStream = fs.createWriteStream('./log.txt',
      {'flags' : 'a',
       'encoding' : 'utf8',
       'mode' : 0666});

writeStream.on('open', function() {
   // get list of files
   fs.readdir('./data/', function(err, files) { // get files array
     console.log(files);

      // for each file
      if (err) {
         console.log(err.message);
      } else {
         files.forEach(function(name) { // each file name
         console.log(name);

            // modify contents
            fs.readFile('./data/' + name,'utf8', function(err,data) { // read file data
              console.log(data);

               if (err){
                  console.error(err.message);
               } else {
                  var adjData = data.replace(/somecompany\.com/g,
                             'burningbird.net'); // replace text

                  // write to file
                  fs.writeFile('./data/' + name, adjData, function(err) // write data at file
                    {

                     if (err) {
                        console.error(err.message);
                     } else {

                        // log write
                        writeStream.write('changed ' + name + '\n', // write changed file name at log file
                        'utf8', function(err) {

                           if(err) console.error(err.message);
                        });
                     }
                  });
               }
            });
         });
      }
    });
});

writeStream.on('error', function(err) {
  console.error("ERROR:" + err);
});
