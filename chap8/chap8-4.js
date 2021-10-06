var execfile = require('child_process').execFile,
    child;

child = execfile('./app', function(error, stdout, stderr) {
  if (error == null) {
    console.log('Ruslan 1');
    console.log('stdout: ' + stdout); // print result from ./app
    console.log('Ruslan 2');
  }
});

