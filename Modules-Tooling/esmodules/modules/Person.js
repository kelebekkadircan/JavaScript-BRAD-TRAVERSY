class Person
{
    constructor(name,age) {
        this.name = name ;
        this.age = age;
    }
    greet()
    {
        console.log(`Merhaba benim adım ${this.name} ve yaşım ${this.age}`);
    }
}


export default Person;