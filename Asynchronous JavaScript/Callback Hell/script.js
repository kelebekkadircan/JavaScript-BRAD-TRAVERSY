function getData(endpoint,cb)
{
    const xhr = new XMLHttpRequest();
    // get komutu ile open fonksiyonu üzerinden verileri getirir 
    xhr.open('GET',endpoint);
    // işlem başarılıysa içindeki verileri almayı sağlar
    xhr.onreadystatechange = function () 
    {
        if(this.readyState === 4 && this.status === 200)
        {
            cb(JSON.parse(this.responseText));
        }
    }
    // 1 ila 3 saniye içerisinde çalışmasını sağlar
    setTimeout(() => { 
        xhr.send();

    },Math.floor(Math.random()*2000) + 1000);
    
}


// yazdığımız fonksiyonun içinde çalıştırırsak belli bir sıraya göre çalışıcaktır
getData('movies.json',(data) => {
    console.log(data);
    getData('actors.json',(data) => {
        console.log(data);
    getData('directors.json', (data) => {
        console.log(data);
    })
    })
})
// getData('directors.json')
// getData('actors.json')








