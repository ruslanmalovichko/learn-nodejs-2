var timer1 = setTimeout(function(name) { // call immideately, wait 6 seconds, name = Shelley
             console.log('Hello ' + name);
           // }, 30000, 'Shelley');
           }, 6000, 'Shelley');

console.log("waiting on timer...");

setTimeout(function(timer) { // call immideately, wait 3 seconds, timer = timer1 function
            clearTimeout(timer); // Disable timeout timer1 function. Application will stop faster
            // console.log(timer);
            console.log('cleared timer');
           }, 3000, timer1);
