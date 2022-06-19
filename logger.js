const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log("Listened", message);
        //raise the event
        this.emit("messageLogged",{data: "Hello I am listening"})
    }
}

module.exports = Logger;