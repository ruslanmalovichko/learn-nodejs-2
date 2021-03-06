var promise = require('bluebird');
var fs = promise.promisifyAll(require('fs'));

fs.readdirAsync('./apples/').map(filename => {
  console.log('Ruslan 1');
  console.log(filename);
  console.log('Ruslan 2');
   fs.readFileAsync('./apples/'+filename,'utf8')
      .then(function(data) {
         var adjData = data.replace(/apple/g, 'orange');
         return fs.writeFileAsync('./oranges/'+filename, adjData);
      })
      .catch(function(error) {
         console.error(error);
      })
})
.catch(function(error) {
   console.error(error);
})

