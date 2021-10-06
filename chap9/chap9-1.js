"use strict";

var fs = require('fs');

fs.open('./new.txt','a+',0o666, function(err, fd) { // Open file with writing ability
// fs.open('./new.txt','a+',0666, function(err, fd) {
     if (err) return console.error(err);
     fs.write(fd, 'First line', 'utf-8', function(err,written, str) { // Add text at file
        if (err) return console.error(err);
        var buf = new Buffer(written);
        fs.read(fd, buf, 0, written, 0, function (err, bytes, buffer) {
           if (err) return console.error(err);
           console.log(fd);
           console.log(buffer.toString('utf8'));
           console.log(buf.toString('utf8'));
           console.log(written);
        });
      });
});

