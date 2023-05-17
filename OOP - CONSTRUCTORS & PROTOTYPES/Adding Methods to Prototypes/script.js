function Rectangle(name, width, height)
{
    this.name = name;
    this.width = width;
    this.height = height;
    
}

Rectangle.prototype.area = function ()
{
    return this.width * this.height;
}

Rectangle.prototype.isSquare= function ()
{
    return this.width === this.height;
}

Rectangle.prototype.changeName = function (newName)
{
    return (this.name = newName)
}

Rectangle.prototype.perimeter = function ()
{
    return (this.width * this.height) * 2 ;
}





const rect = new Rectangle('Kadir',20,31);
const rect2 = new Rectangle('aley',15,11);

console.log(rect2)
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.name);
console.log(rect2.changeName('Testt'));
console.log(rect2.isSquare());
console.log(rect2.name);







