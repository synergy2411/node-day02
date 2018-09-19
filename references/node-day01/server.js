// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// app.get("/", function(req, res){
//     // res.send("Hello From Express!")
//     res.sendFile(__dirname+'/public/index.html');
// });
// app.get("/login", function(req, res){
//     if(req.query){
//         console.log("Username : " + req.query.username);
//         console.log("Password : " + req.query.password);
//         res.send("Data received!");
//     }
// });
// app.post("/login", function(req, res){
//     console.log("API Hit");
//     if(req.body){
//         console.log(req.body);
//     }
//     res.send("Data received!");
// });
// app.listen(9090, function(){
//     console.log("Express running on Port 9090...");
// });


//EXPRESS ROUTER
// var express = require("express");
// var bodyParser = require("body-parser");

// var items = [];

// var router = express.Router();
// router.use(bodyParser.urlencoded({extended : true}));

// router.route("/")
//     .get(function(req, res, next){
//         res.send({
//             status : "Items Returned!",
//             items : items
//         })
//     })
//     .post(function(req, res, next){
//         if(req.body){
//             items.push(req.body);
//         }
//         res.send({
//             status : "Item Added!",
//             items : items
//         })
//     })
//     .put(function(req, res, next){
//         items = req.body;
//         res.send({
//             status : "Items Replaced!",
//             items : items
//         })
//     })
//     .delete(function(req, res, next){
//         items = [];
//         res.send({
//             status : "Items Removed!",
//             items : items
//         })
//     });
// router.route("/:id")
//     .get(function(req, res, next){
//         var id = req.params['id']
//         if(id && items[id]){
//             res.send({
//                 status : "Item Found!",
//                 item : items[id]
//             })
//         }
//         else{
//             res.send({
//                 status : "Item NOT Found!"
//             })
//         }
//     })
//     .all(function(req, res, next){
//         res.status(501).send({
//             status : "Not Implemented"
//         })
//     })

// var app = express();
// app.use("/todo", router);
// app.listen(9090, function(){
//     console.log("Express Router running on Port 9090...");
// })



//Cookies 
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express()
    .use(cookieParser())
    .use(function(req, res, next){
        if(req.cookies.name){
            console.log("User name : " + req.cookies.name);
        }
        else{
            res.cookie('name', 'foo',{ httpOnly : true, maxAge : 900000});
        }
        next();
    })
    .use(function(req, res, next){
        res.send("Hello Again!");
    })
    .use(function(req, res, next){
        console.log("Additional Middleware");
    })
    .listen(9001);
