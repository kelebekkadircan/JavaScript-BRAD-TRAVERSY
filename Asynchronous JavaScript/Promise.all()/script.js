function getData(endpoint)
{
    return new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest();
    // get komutu ile open fonksiyonu üzerinden verileri getirir 
    xhr.open('GET',endpoint);
    // işlem başarılıysa içindeki verileri almayı sağlar
    xhr.onreadystatechange = function () 
    {
        if(this.readyState === 4)
        {
            if( this.status === 200)
            { 
                resolve(JSON.parse(this.responseText));
            }
            else
            { 
                reject('Something went wrong')
            }
        }
    }
    // 1 ila 3 saniye içerisinde çalışmasını sağlar
    setTimeout(() => { 
        xhr.send();

    },Math.floor(Math.random()*2000) + 1000);

    });

}
// promiseleri değişkene atıyoruz
const moviesPromise = getData('movies.json');
const actorsPromise = getData('actors.json');
const directorPromise = getData('directors.json');

const dummyPromise = new Promise((resolve,reject) => {
    resolve('Hello World')
}) 
// aynı anda birden fazla noktadan veri almamız ve bunları istediğimiz sırada almamız gerekiyorrsa kullanabiliriz
Promise.all([moviesPromise,actorsPromise,directorPromise,dummyPromise])
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));








