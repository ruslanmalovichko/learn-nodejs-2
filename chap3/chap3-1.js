var vm = require('vm');

var sandbox = {
   process: 'this baby',
   require: 'that'
   // console: console // we don't include console, so it will not work
};

vm.runInNewContext('console.log(process);console.log(require)',sandbox);
