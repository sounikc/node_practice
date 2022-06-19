//in  Custom Javascript we have window object but in node there is no window object instead of window node has global object

//example
//-----------
//global.console.log
//global.setTimeout()

// console.log(module);
// console.log(module.filename);
//const logger = require('./module_test'); //require function seems to be a global funtion but not..it is actually local to each module

//logger("hello message"); **will through error that logger is not a function because we export the logger function inside log object
//logger.log("hello module");

//const path = require('path');

// const pathObj = path.parse(__filename);
// if(pathObj.ext === '.js'){
//     console.log(`this is a javascript file`);
// }else{
//     console.log(`this is something else`);
// }

// console.log(path.isAbsolute(__filename));

// const os = require('os');
// console.log(os.endianness());
// var free_mem_in_kb = Math.floor(os.freemem()/1024);
// var free_mem_in_mb = Math.floor(free_mem_in_kb/1024);
// var free_mem_in_gb = Math.floor(free_mem_in_mb/1024);

// console.log(`${free_mem_in_gb}GB, ${free_mem_in_mb}MB, ${free_mem_in_kb}KB, ${os.freemem()}Bytes`);

// const fs = require('fs');

// fs.stat('./first_module.js', (error, stats) => {
//     console.log(stats.isFile())
//     // if (error) throw error;
//     // console.log(stats.isFile());
//     //     fs.readFile('./module_test.js','utf8',(err,data)=>{  //read the file
//     //         if(err){
//     //             console.log("Error", err);
//     //         }else{
//     //             console.log(data);
//     //             fs.rename('./module_test.js','./first_module.js', (err)=>{ //rename the file to first_module.js
//     //                 if(err){
//     //                     console.log("Error", err);
//     //                 }
//     //             })
//     //         }
//     //     })
// })

//----------------------***------------------//
////EVENT BASIC START/////
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //register a event listener
// emitter.on('logging', (arg)=>{
//     console.log("Listened", arg)
// })

// // raise event
// emitter.emit("logging", {data: "hello I am listening"});

//----------------------***------------------//
////EVENT BASIC END/////





//----------------------***------------------//
////EVENT USING A CLASS CONCEPT START/////

// const Logger = require('./logger');
// const logger = new Logger();

// //register the event
// logger.on('messageLogged', (arg)=>{
//     console.log("Listener Called", arg);
// })

// logger.log("message")
//----------------------***------------------//
////EVENT USING A CLASS CONCEPT END/////


const http = require('http');
const { hostname } = require('os');
const server = http.createServer((req,res)=>{  //server is actually a EventEmitter
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
}); 

server.listen(3000, hostname,()=>{
    console.log(`Server running at http://${hostname}:3000/`);
})

//npm init //**command to create package.json that is nessecery to install node packages
//npm init --yes //**command use to skip all the question on creating package.json file */

// if we require or load a module there three steps that node follow:
//1. is it a core module?
//2. is it file/folder?
//3. is this in node_modules?

// SEMVER
// ~ is more stipper than ^ as ^ supports any major version till that specific and it will not dependent on minor and major
// ^4.5.1 means it support all version till major version 4 (4.x.x)
//~4.5.1 (4.5.x)