var express = require("express");

var app = express();

var users = ["foo", "bar", "bam"]

app.get("/api/users", function(req, res){
    res.json(users);
})

module.exports = app;