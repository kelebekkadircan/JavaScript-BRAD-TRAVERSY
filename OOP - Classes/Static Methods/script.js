class Rectangle
{
    constructor(name,height,width)
    {
        this.name = name ; 
        this.height =height;
        this.width = width;
    }
    area()
    {
        return this.height * this.width
    }

    static getClass()
    {
        return 'Rectangle';
    }

}

const rect = new Rectangle('KARE',15,8);
console.log(rect.area());
console.log(Rectangle.getClass());





















