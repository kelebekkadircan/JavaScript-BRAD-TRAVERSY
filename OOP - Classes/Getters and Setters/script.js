// değer döndürmeden önce bakmak için veya özel özelliklere doğrudan erişilmesi istenmiyorsa

class Person
{
    constructor(firstName,lastName)
    {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName()
    {
        return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
    }

    set firstName(value)
    {
        this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }

    get lastName()
    {
        return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
    }

    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }


}

const person1 = new Person('kadircan', 'kelebek');

console.log(person1.firstName);
console.log(person1.lastName);

// person1.firstName = 'aley';
console.log(person1._firstName);

console.log(person1.fullName);












