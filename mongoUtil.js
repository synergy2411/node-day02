var mongodb = require("mongodb");
var client = mongodb.MongoClient;

module.exports.connect = function(){
    client.connect("mongodb://localhost:27017", function(err, database){
        if(err){
            process.exit(1);
        }
        console.log("Mongo Connected!");
    })
}

module.exports.find = function(){}

module.exports.insert = function(){}

module.exports.remove = function(){}

module.exports.update = function(){}

