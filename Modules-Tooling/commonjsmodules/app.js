const {capitalizeWords, makeMoney }= require('./utils')
const Person = require('./Person')


console.log(capitalizeWords('merhaba dünya ben kadircan'));
console.log(makeMoney(75));

const person1 = new Person('kadir',31);

person1.greet();



