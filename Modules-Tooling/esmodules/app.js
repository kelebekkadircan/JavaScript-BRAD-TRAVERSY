import {capitalizeWords, makeMoney }from "./modules/utils.js";
// import makeMoney from "./modules/utils.js";
import Person from "./modules/Person.js";


console.log(capitalizeWords('merhaba düünya'))
console.log(makeMoney('750'))

const person1 = new Person('Kadir',31);

person1.greet();



