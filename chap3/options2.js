var program = require('commander');

program
  .version('0.0.1')
  .command('keyword <keywork> [otherKeywords...]')
  .action(function (keyword, otherKeywords) { // keyword is first argument, otherKeywords is array of other arguments
    console.log('Ruslan 1');
    console.log(keyword);
    console.log('Ruslan 2');

    console.log('Ruslan 3');
    console.log(otherKeywords);
    console.log('Ruslan 4');

    console.log('keyword %s', keyword);
    if (otherKeywords) {
      otherKeywords.forEach(function (oKey) {
        console.log('keyword %s', oKey);
      });
    }
  });

program.parse(process.argv);

