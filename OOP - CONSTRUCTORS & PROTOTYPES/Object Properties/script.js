function Rectangle(name, width, height)
{
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function()
    {
        return this.width * this.height ;
    };

}

const rect1 = new Rectangle('kadir',10,20);
const rect2 = new Rectangle('aley',30,20);
// Add property
rect2.color ='blue';

console.log(rect2.color);
console.log(rect2.hasOwnProperty('color'));
// Delete Property
delete rect2.color;

// Get Keys
console.log(Object.keys(rect1));
// Get values
console.log(Object.values(rect2));
// Get entries
console.log(Object.entries(rect1));

console.log(rect1);
// Undefined
console.log(rect2.color);
// check for property
// False
console.log(rect2.hasOwnProperty('color'));




for (let[a, b] of Object.entries(rect1))
{
    if(typeof b !== 'function'){
        console.log(`${a} - ${b}`);
    }
}





