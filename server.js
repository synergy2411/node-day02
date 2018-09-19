var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoUtil = require("./mongoUtil");

mongoUtil.connect();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/login", function(req, res){
    if(req.body){
        console.log(req.body);
        
        mongoUtil.remove({"username" : req.body.username});

        // mongoUtil.insert(req.body);
        
        // mongoUtil.checkUser(req.body.username, req.body.password);

        // var users = mongoUtil.find();
        // users.find().toArray(function(err, docs){
        //     console.log(docs);
        // })
    }
    res.send("Data Received.");
});

app.listen(9090, function(){
    console.log("Express running on port 9090...");
})