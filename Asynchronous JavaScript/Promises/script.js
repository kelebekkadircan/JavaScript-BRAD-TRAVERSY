// promise oluşturuyoruz
const promise = new Promise((resolve,reject) => {
    // asenkron yazı gönderiyoruz
    setTimeout(() => {
        console.log('Async task complete');
        // resolve çağırıyoruz çünkü onu görmek istiyoruz
        resolve();

    },1000)

});
// önce promise çalışmasını bekler
promise.then(() => {
    console.log('Promise consumed..');
});

// değişkene koymadanda direkt then fonksiyonu yazıp çağırılabilir
const getUser = new Promise((resolve,reject) => {
    // asenkron yazı gönderiyoruz
    setTimeout(() => {
        let error = false;

        if (!error)
        { 
            resolve({name:'Kadircan',age: '22'});
        }
        else
        {
            reject('Error: Something went wrong');
        }
    },1000)

})


getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('The promise has been resolved or rejected'));

// globalde bağımsız olarak ilk çalışır
console.log('Hello from global scope');









