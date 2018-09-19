module.exports.foo = function(){
    console.log("Foo function called!");
}

module.exports.bar = function(){
    console.log("Bar Called!");
}

module.exports.MAGIC_NUMBER = function(){
    return Math.random()*10; 
}