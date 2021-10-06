var vm = require('vm');

var sandbox = {
   process: 'this baby', // process store text
   require: 'that', // require store text
   console: console // console is global object for console log
};

vm.runInNewContext('console.log(process);console.log(require)',sandbox);
