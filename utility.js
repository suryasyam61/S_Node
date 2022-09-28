const util = require('util')

const template = "congratulate %s on her %dth birthday!";

const notification = util.format(template,'maria',12);

const ES6name='syam'
const ES6age =12;

const EStemplate = `congratulate ${ES6name} on her ${ES6age}th birthday`

console.log(notification)
console.log(EStemplate)