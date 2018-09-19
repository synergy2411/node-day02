var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var _db;

module.exports.connect = function(){
    client.connect("mongodb://localhost:27017", function(err, database){
        if(err){
            process.exit(1);
        }
        console.log("Mongo Connected!");
        _db = database.db("cap-node-db");
    })
}

module.exports.find = function(){
    return _db.collection("users")
}

module.exports.checkUser = function(username, password){
    _db.collection("users").find({
        "username" : username, 
        "password" : password
    }, function(err, result){
        if(err){
            console.log("Something bad happened!", err);
        }else{
            console.log(result);
            if(result.length > 0 ){
                console.log("User record exists!")
            }else{
                console.log("User record does NOT exist!");
            }
        }
        
    })
}

module.exports.insert = function(data){
    _db.collection("users").insert(data, function(err, result){
        if(err) console.log(err);
        console.log("User record Inserted in DB.", result);
    })
}

module.exports.remove = function(key){
    _db.collection("users").remove(key, function(err, status){
        if(err) console.log(err);
        if(status.result.n > 0){
            console.log("User record removed from DB.");
        }else{
            console.log("User does not exist in DB.")
        }
        
    })
}

module.exports.update = function(username, password){
    _db.collection("users").updateOne({ "username" : username }
      , { $set: { "password" : password } }, function(err, result) {
        if(err) console.log(err);
        console.log("User record updated.", result);
    });  
}

