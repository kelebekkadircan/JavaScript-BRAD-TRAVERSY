// Parent Class
class Shape
{
    constructor(name)
    {
        this.name = name;
    }
    logName()
    {
        console.log('Shape name:' + this.name);
    }
}

// Subclasses
class Rectangle extends Shape
{
    constructor(name,width,height)
    {
        super(name);

        this.width = width;
        this.height =height;
    }
}

class Circle extends Shape
{
    constructor(name,radius)
    {
        super(name);
        this.radius = radius;
    }
    calculateArea()
    {
        console.log('Area is ' + (Math.PI * this.radius * this.radius));
    }
    logName()
    {
        console.log('Circle Name: ' + this.name);
    }
}


const rect = new Rectangle('Kadir',15,25);
const circle = new Circle('Kadircan',3);




console.log(rect);
rect.logName();
console.log(circle);
circle.calculateArea();
circle.logName();




