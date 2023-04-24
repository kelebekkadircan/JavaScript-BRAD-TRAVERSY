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
// const moviesPromise = getData('movies.json');
// const actorsPromise = getData('actors.json');
// const directorPromise = getData('directors.json');

// // const dummyPromise = new Promise((resolve,reject) => {
// //     resolve('Hello World')
// // }) 
// // aynı anda birden fazla noktadan veri almamız ve bunları istediğimiz sırada almamız gerekiyorrsa kullanabiliriz
// Promise.all([moviesPromise,actorsPromise,directorPromise])
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error));

async function getAllData() 
{
    const movies = await getData('movies.json');
    const actors = await getData('actors.json');
    // console.log(actors);
    const directors= await getData('directors.json');
    console.log(movies, actors , directors);
    
    // console.log(directors);
}

async function getAllDataWithFetch()
{ 
    const moviesRes = await fetch('movies.json');
    const movies = await moviesRes.json();

    const actorsRes = await fetch('actors.json');
    const actors = await actorsRes.json();

    const directorRes = await fetch('directors.json');
    const directors = await directorRes.json();

    console.log(movies, actors, directors);

}

async function getAllDataPromiseAll()
{ 
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('movies.json'),
        fetch('actors.json'),
        fetch('directors.json')
    ]);
    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);


}

getAllDataPromiseAll();



// getAllData();

// getAllDataWithFetch();























