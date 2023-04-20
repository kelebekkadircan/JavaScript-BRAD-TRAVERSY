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

getData('movies.json')
.then((movies) => {
    console.log(movies);
    return getData('actors.json')
})
.then((actors) => {
    console.log(actors);
    return getData('directors.json')
})
.then((directors) => { 
    console.log(directors);
})
.catch((error) => console.log(error));







