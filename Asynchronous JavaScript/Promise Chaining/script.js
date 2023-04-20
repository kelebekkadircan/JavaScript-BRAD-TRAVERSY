// promise oluşturuyoruz
const promise = new Promise((resolve,reject) => { 

    setTimeout(() => { 
        let error = false;

        if(!error)
        { 
            resolve({name:'kadircan',age:'22'})
        }
        else{
            reject('Error: Something went wrong')
        }

    },1000)


});
// zincir yapısını oluşturuyoruz
promise
.then((user) => {
    console.log(user);
    return user.name;
})
.then((name) => 
{
console.log(name);
return name.length;
})
.then((nameLenght) => {
    console.log(nameLenght);
})
.catch((error) => console.log(error));






