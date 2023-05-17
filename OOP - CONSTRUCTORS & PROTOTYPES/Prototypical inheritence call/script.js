function Shape(name)
{
    this.name = name;

}

function Rectangle(name , height, width)
{
    Shape.call(this, name);

    this.height = height;
    this.width = width;
}


const rect = new Rectangle('kadir',20,31);

console.log(rect);









