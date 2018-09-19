// // describe : encapsulate test suits , 
// // it : creates test suits

// var assert = require("assert");

// describe("Our Test Suite", function(){

//     beforeEach(function(){
//         console.log("beforeEach");
//     })
//     afterEach(function(){
//         console.log("afterEach");
//     })
//     before(function(){
//         console.log("before");
//     })
//     after(function(){
//         console.log("after");
//     })

//     it("Should pass this test", function(){
//         assert.equal(1, 1, "1 should be equal to 1");
//     })
//     it("Should fail this test", function(){
//         assert.equal(1, 0, "1 should be equal to 0");
//     })
// })

// describe.only("second", function(){
//     it("It woun't execute", function(){
//         console.log("Test");
//     })
// })


//ASYNC TESTING
// describe("Our Test Suit", function(){
//     it("this should pass", function(done){
//         setTimeout(function(){
//             done();
//         }, 500);
//     })
//     it("this should fail", function(done){
//         setTimeout(function(){
//             done(new Error("Fail"));
//         }, 500);
//     })
// });


//CHAI DEMO

// var assert = require("chai").assert;
// describe("Test Suit 1", function(){
//     it("should pass", function(){
//         assert.isNull(null, "Null should be null");
//     })

//     it("should fail", function(){
//         assert.isNull(undefined, "undefined should be null");
//     })
// } )


//BDD Style

var assert = require("chai").assert;
var expect = require("chai").expect;

var user = { friends : ["foo", "bar", "bas"]}

describe("Test Suit", function(){
    //Assert Style
    it("Test 1", function(){
        assert.lengthOf(user.friends, 3);
    });
    //BDD Style
    it("Test 2", function(){
        expect(user).to.have.property('friends').with.length(3);
    });
    it("Test 3", function(){
        expect(user).property('friends').length(3);
    })
})