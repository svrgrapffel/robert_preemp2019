const BasicEmitter = {
  events: [],
  on: function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  },
  emit: function(type) {
    if (this.events[type]) {
      this.events[type].forEach(function(listener) {
        listener();
      });
    }
  }
};
const emitter = Object.create(BasicEmitter);
emitter.on("greet", function() {
  console.log("Hello 2");
});

emitter.on("greet", function() {
  console.log("Hello 1");
});
console.log("Hello");
console.log("greet");
