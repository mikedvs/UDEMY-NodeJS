// Files and fs
// =============

var fs = require('fs');

// Synchronous load

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);
console.log(__dirname);
// Most cases you don't need it to be Synchronous'

var greet2 = fs.readFile(__dirname + '/greet2.txt', 'utf8', function(err, data){
    console.log(err + data);
});

console.log('done');



//error first callbacks - BIG WORD ALERT!

// Error-first callback:
// Callbacks take an error object as their first 
// parameter. =>

// Null if no error, otherwise will contain an object defining
// the errir. This is a standard so we know in what order to 
// place our parameters for our callbacks.