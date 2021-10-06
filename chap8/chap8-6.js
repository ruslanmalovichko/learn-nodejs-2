var exec = require('child_process').exec,
    child;

child = exec('./polaroid -s phoenix5a.png -f phoenixpolaroid.png', function(error, stdout, stderr) {
// child = exec('./polaroid', function(error, stdout, stderr) {
// child = exec('./polaroid', {cwd: 'snaps'}, function(error, stdout, stderr) {
// child = exec(     './app', function(error, stdout, stderr) {
                if (error) return console.error(error);
                console.log('stdout: ' + stdout);
});

