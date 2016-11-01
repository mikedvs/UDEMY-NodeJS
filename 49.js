//Javascript Aside - Callbacks

// A function [assed to some other function, which will 
// used a t a later stage

function greet(callback) {
    console.log('Hello!');
    var data = {
        name: 'John Doe'
    };
    callback(data);
}

greet(function(data){
    console.log('the callback was invoked');
    console.log('and the data passed' + data);
});

greet(function(data){
    console.log('a different callback was invoked');
    console.log(data.name);
});