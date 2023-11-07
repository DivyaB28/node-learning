//Event driven Programming
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//1. on method- listen for specific event
//Adds the listener function to the end of the listeners array for the event named eventName.
//No checks are made to see if the listener has already been added.
//Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
// server.on('connection', (stream) => {
//   console.log('someone connected!');
// });

//2. emit method - emit that event

//a. we can have as many listener function
//b. order matters- first listen for the event and then we emit it
//c. we can pass more arguments when we are emitting the event
customEmitter.on("response", (name, id) => {
  console.log(`Data received user ${name} with age ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some other logic here`);
});
customEmitter.emit("response", "John", 34);
