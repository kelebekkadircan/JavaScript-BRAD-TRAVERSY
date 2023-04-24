const promise = new Promise((resolve, reject) => 
{

    setTimeout(() => {
        resolve({name:'Kadircan',age: 23});
    }, 1000);

});


// promise.then(data => console.log(data))

async function getPromise()
{
    const response = await promise;
    console.log(response);
}

// getPromise();

// async await ile api dan veri çekiyoruz
// async function getUsers()
// { 
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/');
//     const data = await response.json();

//     console.log(data);
// }

// // klasik fetch yöntemi ile çekiyoruz
// function getUserss()
// { 
            //     fetch('https://jsonplaceholder.typicode.com/users')
            //     .then(res => res.json())
            //     .then(data => console.log(data))
            
            // }
            
            // getUsers();
            
            // getUserss();
            
            
async function getUsers()
{ 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
            
    console.log(data);
}

// getUsers();

const getPosts = async () => 
{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);
}

getPosts();



