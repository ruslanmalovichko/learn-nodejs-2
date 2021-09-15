var timer = setTimeout(function(name) {
             console.log('Hello ' + name);
           }, 30000, 'Shelley');

timer.unref(); // will stop timer, because we don't have other event

console.log("waiting on timer...");

