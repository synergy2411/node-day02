
// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("Running the Request...");
//     }, 2000);
// }

// function webRequest(req){
//     console.log("Starting the Operation with ID #"+ req.id);
//     longRunningOperation();
//     console.log("Ending the Operation with ID #"+ req.id);

// }
// webRequest({id : 1});
// webRequest({id : 2});

//CORE Module
// var path = require("path");
// var url = "http://www.example.com/public/index.html";
// console.log(path.basename(url));
// console.log(path.dirname(url));
// console.log(path.extname(url));


// var os = require("os");
// console.log("Architecture : " + os.arch());
// console.log("Free Memory : " + os.freemem());
// console.log("Total Memory : " + os.totalmem());
// console.log("Number of CPU's : " + os.cpus().length);
// console.log("Platform : " + os.platform());

// External Modules
// var colors = require("colors");

// console.log("Welcome to NodeJS".red);
// console.log("Welcome to NodeJS".green);
// console.log("Welcome to NodeJS".blue);
// console.log("Welcome to NodeJS".inverse);

//File Module
// var logger = require("./logger");
// logger.foo();
// console.log("Magic Number : " + logger.MAGIC_NUMBER());

//HTTP Module

// var http = require('http');

// var server = http.createServer(function (request, response) {

//     // console.log(request.method);

//     response.write("server is running");
//     response.end();

// })

// server.listen(4000);

// console.log("sever is running on port 4000");



// var http = require("http");
// var server = http.createServer(function(request, response){
//     console.log("Method : " + request.method);
//     console.log("URL : " + request.url);
//     console.log(request);
//     response.writeHead(200);
//     response.write("Hello Client!");
//     response.end();
// });

// server.listen(9000);
// console.log("Server listening on Port 9000");



// var fs = require("fs");
// // var readStream = fs.createReadStream("./test.txt");
// // var writeStream = fs.createWriteStream("./test1.txt");
// // readStream.pipe(writeStream);

// //Async Version
// fs.readFile("./test.txt", function(err, data){
//     if(err){
//         cosnole.log(err);
//     }
//     console.log(data.toString());
// })
// console.log("Performing some action!");
// //Sync Version
// var data = fs.readFileSync("./test1.txt");
// console.log(data.toString());

// var str = "Sample String";
// var buf = new Buffer(str, 'utf-8');
// console.log(buf);
// var roundTrip = buf.toString();
// console.log(roundTrip);

//Events Module
// var logger = require("./logger");
// var EventEmitter = require("events").EventEmitter;
// var emitter = new EventEmitter();
// // emit() : triggers the event
// // on() : handler function

// emitter.on("removeListener", function(eventName, listernerFunction){
//     console.log(listernerFunction.name + " Removed from Event " + eventName);
// })

// emitter.on("newListener", function(eventName, listernerFunction){
//     console.log(listernerFunction.name + " Attached with Event " + eventName);
// })

// function handler2(){
//     console.log("Handler 2")
// }
// emitter.on("foo", function(){
//     console.log("Foo Event Fired!");
//     emitter.removeListener("foo", handler2);
// });
// emitter.on("foo", handler2);
// emitter.on("foo", logger.foo);

// emitter.on("bar", function(){
//     console.log("Bar Event Fired!")
// })
// emitter.on("bar", handler2);

// emitter.emit("foo");
// emitter.emit("bar");



// var EventEmitter = require("events").EventEmitter;
// var emitter = new EventEmitter();
// //Maximum call limit to Handler; default is 10;
// emitter.setMaxListeners(30);

// var count = 0;

// function someFunc() {
//     emitter.on("foo", function () {
//         count++;
//         console.log(count);
//     })
// }

// for (var i = 0; i < 20; i++) {
//     someFunc();
// }

// emitter.emit("foo");


//Streams
// var EventEmitter = require("events").EventEmitter;
// var stream = require("stream");

// console.log(new stream.Stream() instanceof EventEmitter);
// console.log(new stream.Readable() instanceof stream.Stream);
// console.log(new stream.Writable() instanceof stream.Stream);


// function Person(fname, lname){
//     this.fname = fname;
//     this.lname = lname;
//     this.getFullName = function(){
//         return this.fname + " " + this.lname;
//     }
// }

// Person.prototype.getName = function(){
//     return this.fname + " " + this.lname;
// }

// var foo = new Person("Foo", "Bar")
// console.log(foo.getName());

//TRANSFORM STREAM
// var fs = require("fs");
// var gzip = require("zlib").createGzip;
// var readStream = fs.createReadStream("./test.txt");
// var writeStream = fs.createWriteStream("./test1.txt");
// readStream.pipe(gzip());
// fs.writeFile("./newfile.txt", readStream.pipe(gzip()),  );

//Data Compression and saving
// var zlib = require("zlib");
// const gzip = zlib.createGzip();
// const fs = require('fs');
// const inp = fs.createReadStream('test.txt');
// const out = fs.createWriteStream('input.txt.gz');
// inp.pipe(gzip).pipe(out);
