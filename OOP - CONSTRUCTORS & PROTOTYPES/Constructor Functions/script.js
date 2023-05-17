

function Rectangle(name,width,height)
{
    this.name = name;
    this.width = width;
    this.height = height;
}

const rect1 = new Rectangle('Kadir',10,20);
const rect2 = new Rectangle('Aley',20,30);


console.log(rect1,rect2);
console.log(rect1.constructor);






