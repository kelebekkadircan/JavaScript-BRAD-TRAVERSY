const set = new Set([1,2,2,2,3,4,4,4]); // still 4 because dont count the same



console.log(set);


set.add(5);
console.log(set);

console.log(set.has(6)) //False
console.log(set.has(3)) // true



set.delete(5)
console.log(set);


const setArray = Array.from(set);

console.log(setArray);

for (let a of setArray )
{
    console.log(a);
}

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

