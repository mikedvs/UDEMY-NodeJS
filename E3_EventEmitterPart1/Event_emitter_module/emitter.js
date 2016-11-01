function Emitter() {
    this.events = {};
}


// Event Listener : The code that respoonds to an Event
// You can have many listeners listening to the same event..
// and when they are invoked...this will happen one at a time.

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
    console.log(this);
}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;