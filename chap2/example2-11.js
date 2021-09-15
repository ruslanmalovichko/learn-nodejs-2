var fs = require('fs');
var writeStream = fs.createWriteStream('./log.txt',
      {flags : 'a',
       encoding : 'utf8',
       mode : 0666});

writeStream.on('open', function() {

   var counter = 0;
   // new var

   // get list of files
   fs.readdir('./data/', function(err, files) {
     // get files array
     console.log(files);

      // for each file
      if (err) {
         console.error(err.message);
      } else {
         files.forEach(function(name) {
           // each file name
           console.log(name);

            // new start
            fs.stat('./data/' + name, function (err, stats) {

               if (err) return err;
               if (!stats.isFile()) { // if its not file, but for example dir, so increment counter and go to the next file
                  counter++;
                  return;
               }

            // new end

               // modify contents
               fs.readFile('./data/' + name,'utf8', function(err,data) {
                 // read file data
                 console.log(data);

                  if (err){
                     console.error(err.message);
                  } else {
                     var adjData = data.replace(/somecompany\.com/g,
                             'burningbird.net');
                      // replace text

                     // write to file
                     // write to file
                     fs.writeFile('./data/' + name, adjData, 
                                                  function(err) {
                       // write data at file

                        if (err) {
                           console.error(err.message);
                        } else {

                           // log write
                           writeStream.write('changed ' + name + '\n',
                            'utf8',
                            function(err) {
                             // write changed file name at log file

                              if(err) {
                                 console.error(err.message);
                              } else {
                                // new case
                                 console.log('finished ' + name); // write changed file at cli output
                                 counter++; // increment counter
                                 if (counter >= files.length) { // if we pass all object (files, dirs)
                                    console.log('all done'); // write all done at cli output
                                 }
                               }
                           });
                        }
                     });
                  }
               });
            });
         });
       }
    });
});

writeStream.on('error', function(err) {
  console.error("ERROR:" + err);
});

