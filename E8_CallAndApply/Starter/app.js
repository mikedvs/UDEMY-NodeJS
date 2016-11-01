var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({ name: 'jane doe'});
obj.greet.apply({ name: 'jane doe'});