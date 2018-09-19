var bcrypt = require("bcrypt");






//SYNC VERSION
// var hash = bcrypt.hashSync("NewPassword123", 10);
// if(bcrypt.compareSync("NewPassword123", hash)){
//     console.log("Matched.")
// }else{
//     console.log("Does Not Matched.")
// }

//ASYNC VERSION

// var _hash;
// bcrypt.hash("myPassword123", 10, function(err, hash){
//     console.log(hash);
//     _hash = hash;
// });

// setTimeout(demo, 500);

// function demo(){
//     bcrypt.compare("myPassword", _hash, function(err, flag){
//         if(flag){
//             console.log("Matched.")
//         }else{
//             console.log("Does Not Matched.")
//         }
//     })
// }