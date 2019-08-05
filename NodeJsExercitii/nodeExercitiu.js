// const BasicEmitter = {
//   events: [],
//   on: function(type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
//   },
//   emit: function(type) {
//     if (this.events[type]) {
//       this.events[type].forEach(function(listener) {
//         listener();
//       });
//     }
//   }
// };
// const emitter = Object.create(BasicEmitter);
// emitter.on("greet", function() {
//   console.log("Hello 2");
// });

// emitter.on("greet", function() {
//   console.log("Hello 1");
// });
// console.log("Hello");
// console.log("greet");
/*--------------------------*/
// const fs = require("fs");
// const { EventEmitter } = require("events");

// const emitter = new EventEmitter();

// emitter.on("phase", () => console.log("Poll phase")).emit("phase");
// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("Timers phase"));
//   setImmediate(() => console.log("Checck phase"));
// });

const http = require("http");
const server = http.createServer();

server
  .on("close", () => {
    console.log("called from Close callbacks phase");
  })
  .listen(8000);

process.on("SIGINT", () => {
  server.close();
});
