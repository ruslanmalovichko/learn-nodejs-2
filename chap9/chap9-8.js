var promise = require('bluebird');
var fs = promise.promisifyAll(require('fs'));
var adjData;

fs.readFileAsync('./apples.txt','utf8')
   .then(function(data) {
      adjData = data.replace(/apple/g, 'orange');
      return fs.mkdirAsync('./fruit/');
   })
   // .then(function(adjData) {
   .then(function() {
      return fs.writeFileAsync('./fruit/oranges.txt', adjData);
   })
   .catch(function(error) {
      console.error(error);
   });

