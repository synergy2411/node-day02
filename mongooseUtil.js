var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name : "string",
    address : "string"
});

userSchema.methods.print = function(){
    console.log("Hello! I am " + this.name + "\n Living at " + this.address);
}

var Person = mongoose.model("Person", userSchema);

mongoose.connect("mongodb://localhost:27017/cap-node-db");
var db = mongoose.connection;

db.once('open', function(){
    console.log("DB Connected.");
    var foo = new Person({
        name : "Foo",
        address : "201, main road, Bengaluru"
    });
    foo.print();

    foo.save(function(err){
        if(err) console.log(err);
        Person.findOne({name : "Foo"}).exec(function(err, person){
            person.print();
        })
    })
})