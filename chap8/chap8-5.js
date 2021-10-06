var exec = require('child_process').exec,
    child;

child = exec('./app', function(error, stdout, stderr) {
    if (error) return console.error(error);
    console.log('Ruslan 1');
    console.log('stdout: ' + stdout); // print result from ./app
    console.log('Ruslan 2');
});

