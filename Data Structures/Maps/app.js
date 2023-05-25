const myMap = new Map();

myMap.set('name', 'kadir');
myMap.set(1, 'mavi');
myMap.set(2,'kırmızı');


console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3)); //false

myMap.delete(2);

console.log(myMap);

const peopleMap = new Map();

peopleMap.set('kadir', {phone: '0536-984-7114}', email: 'kelebekkadircan@gmail.com'})
peopleMap.set('aley', {phone: '0546-284-7524}', email: 'damakaley@gmail.com'})
peopleMap.set('anıl', {phone: '0531-314-7314}', email: 'morukanil@gmail.com'})


peopleMap.forEach((person) => console.log(person.email));


console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iter = peopleMap.values();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);


