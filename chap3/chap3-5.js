var vm = require('vm');
var util = require('util');

var sandbox = {
     count1 : 1
    };

vm.createContext(sandbox); // add variable count1 = 1
if (vm.isContext(sandbox)) console.log('contextualized'); // variable added

vm.runInContext('count1++; counter=true;',sandbox, // count1 became = 2, add counter = true
                {filename: 'context.vm'});

console.log(util.inspect(sandbox)); // variant of debug with util

