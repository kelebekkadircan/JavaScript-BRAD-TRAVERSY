//// basit bir fetch işlemi ile response konsola yazdırıyoruz
// fetch('http://httpstat.us/200')
// .then((response) => { 
//     return response
// })
// .then(() => { 
//     console.log('success');
// })

//// catch ile yakalayamadığüımızı görüyoruz
// fetch('http://httpstat.us/404')
// .then((response) => { 
//     return response
// })
// .then(() => { 
//     console.log('success');
// })
// .catch(error => {
//     console.log(error);
// })

//// catch network hatalarını yakalar
// fetch('http://hello123.net')
// .then((response) => { 
//     return response;

// })
// .then(() => { 
//     console.log('success');
// })
// .catch(error => {
//     console.log(error);
// })

//// response.ok komutu ile test ediyoruz
// fetch('http://httpstat.us/404')
// .then((response) => { 

//     if(!response.ok)
//     {
//         throw new Error('Request Failed');
//     }


//     return response;

// })
// .then(() => { 
//     console.log('success');
// })
// .catch(error => {
//     console.log(error);
// })

// status code bakarak if else bloklarıyla kontrol edebiliriz
fetch('http://httpstat.us/200')
.then((response) => { 

    if(response.status === 404)
    {
        throw new Error('Not Found');
    }
    else if(response.status === 500)
    {
        throw new Error('Server Error');
    }
    else if(response.status === 200)
    {
        throw new Error('Request Failed');
    }

    return response;

})
.then(() => { 
    console.log('success');
})
.catch(error => {
    console.log(error);
})












