Math.PI = 4;

// console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math,'PI');

// console.log(descriptor);

const rectObj =
{
    name: 'Rectangle 1 ',
    width: 12,
    height: 31
}




Object.defineProperty(rectObj, 'name',{
    writable: false,
    configurable:false,
    enumerable: false
}
)


descriptor = Object.getOwnPropertyDescriptor(rectObj,'name');
console.log(descriptor);

// Değişmeyecek 
rectObj.name ='New name';
delete rectObj.name;


console.log(rectObj);













