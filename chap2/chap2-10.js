var interval = setInterval(function(name) { // call immideately, wait 3 seconds, name = Shelley
             console.log('Hello ' + name);
           }, 3000, 'Shelley');

setTimeout(function(interval) { // call immideately, wait 7 seconds, interval = interval function
            clearInterval(interval); // Disable interval function. Application will stop faster. Interval will show 2 times (6 seconds). Clear interval will be after 7 second
            console.log('cleared timer');
           // }, 30000, interval);
           }, 7000, interval);

console.log('waiting on first interval...');

