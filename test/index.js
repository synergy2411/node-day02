var test = require("tape");
var request = require("supertest");
var app = require("../server/index");

test("First Test", function(t){
    console.log("Inside Test!");
    request(app)
        .get("/api/users")
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res){
            var compareUsers = ["foo", "bar", "bam"];
            t.error(err, "No Error");
            t.same(res.body, compareUsers, "Users as Expected.");
            t.end();
        });
})