const rectanglePrototypes = 
{
    area: function()
    {
        return this.width * this.height
    },
    perimeter: function()
    {
        return 2 * (this.width * this.height)
    },
    isSquare: function()
    {
        return this.width === this.height
    }
}

function createRectangle(height,width)
{
    return Object.create(rectanglePrototypes, {
        Height: 
        {
            value: height
        },
        Width:
        {
            value: width
        },
    });
    
}

const rect = createRectangle(10,20);

console.log(rect);














