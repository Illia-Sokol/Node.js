// for local variable 
let user = require('./user');
// for global variable x
require('./user');

let vasya = new user.foo('Vasya');
let petya = new user.foo('Petya');
vasya.hello(petya);

let y = x;
console.log(`global x = y =  ${y}`);

console.log('user.js is required');