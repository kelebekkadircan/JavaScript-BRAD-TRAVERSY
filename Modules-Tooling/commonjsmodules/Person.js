class Person
{
    constructor(name,age)
    {
        this.name = name ;
        this.age = age;

    }

    greet()
    {
        console.log(`Merhaba, benim adim ${this.name} ve ben ${this.age} yaşindayim`);
    }
}


module.exports = Person;