var app = require("express")();
var jade = require("jade");
var morgan = require("morgan");

app.use(morgan("tiny"));

app.set("view engine", jade);
app.set("views", __dirname+'/views');

var friends = ["foo","bar","bam","bas"]

app.get("/", function(req, res){
    res.render("index.jade", {"name": "Bob", "friends" : friends});
})

app.listen(9000, function(){
    console.log("Server running on port 9000...");
})