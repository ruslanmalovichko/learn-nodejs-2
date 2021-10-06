var spawn = require('child_process').spawn,
    ps    = spawn('ps', ['ax']),
    // grep  = spawn('grep', ['--line-buffered', 'apache2']);
    grep  = spawn('grep', ['--line-buffered', 'kworker']);
    // grep  = spawn('grep', ['--line-buffered', 'zsh']);

ps.stdout.pipe(grep.stdin);

ps.stderr.on('data', function (data) {
  console.error('ps stderr: ' + data);
});

ps.on('close', function (code) {
  if (code !== 0) {
    console.log('ps process exited with code ' + code);
  }
});

grep.stdout.on('data', function (data) {
  console.log('Ruslan 1');
  console.log('' + data);
  console.log('Ruslan 2');
});

grep.stderr.on('data', function (data) {
  console.log('grep stderr: ' + data);
});

grep.on('close', function (code) {
  if (code !== 0) {
    console.log('grep process exited with code ' + code);
  }
});

