var vm = require('vm');

global.count1 = 100;
var count2 = 100;

var txt = 'if (count1 === undefined) var count1 = 0; count1++;' + // 101, because count1 is global var
          'if (count2 === undefined) var count2 = 0; count2++;' + // 1, because count2 is not global var
          'console.log(count1); console.log(count2);';

var script = new vm.Script(txt);
script.runInThisContext({filename: 'count.vm'});

console.log(count1);
console.log(count2);
