let phrases = require('./ru');

function User(name) {
    this.name = name;
}
User.prototype.hello = function(who) {
    console.log(`${phrases.Hello}, ${who.name}`)
}

exports.foo = User;

//possible create global variable
global.x = 5;