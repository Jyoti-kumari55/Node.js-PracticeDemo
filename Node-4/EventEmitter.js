// Event Emitter is a node.js implementation od the pub sub 
//design pattern, and aslo allow us to create listners for and emit custom events.

// Event emitter is a powerful tool which allows us to decouple the logic and handle asynchronicity in the javascript.
// Importing events
const EventEmitter = require("events");

//Initialising event emitter instance
var eventEmitter = new EventEmitter();

// Registering myEvents
eventEmitter.on("myEvents", (mess) => {
    console.log(mess);
});

//Triggering myEvents
eventEmitter.emit("myEvents", "My First Event...");