
const sym  = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');


console.log(sym,sym1,sym2);

console.log(typeof sym,typeof sym1);

console.log(sym1.description);

console.log(sym.description);

// Symbols are unique
console.log(Symbol('sym') === Symbol('sym')); // false because they are always gonna be unique

const user = 
{
    [Symbol('id')] : 1,
    name: 'Kadircan Kelebek',
    email: 'kelebekkadircan@gmail.com'
}

// user.id = 2 ;

console.log(user);

//  Symbols are Not enumerable

console.log(Object.keys(user));

console.log(Object.values(user));


for (let key in user)
{
    console.log(key);
}

// GetOwnPropertySymbols

console.log(Object.getOwnPropertySymbols(user));

// Symbol.for()
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // true

console.log(Symbol.keyFor(sym3));

console.log(Symbol.keyFor(sym1));

console.log(sym1.toString());
console.log(sym3.toString());


console.log(sym1.valueOf());

console.log(Object.getOwnPropertyNames(Symbol));












