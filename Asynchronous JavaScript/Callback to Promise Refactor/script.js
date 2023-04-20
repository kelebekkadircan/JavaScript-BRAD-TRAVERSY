// function toggle (e)
// { 
//     e.target.classList.toggle('danger');
// }



// document.querySelector('button').addEventListener('click',toggle);

const posts = [
    {title: 'Post one',body: 'this is post one'},
    {title: 'post two',body: 'This is post two'}
];
//  burada post oluşturarak arraya push ediliyor
function createPost(post)
{
    return new Promise((resolve,reject) => {

        setTimeout(() => {

            let error = false;

            if(!error)
            {
                posts.push(post);
                resolve();
            }
            else
            {
                reject('Something Went wrong')
            }
            
        }, 2000);

    });
    
}
// postları alabiliyoruz bu fonksiyon sayesinde 
// bu daha önce çalıştığı için ayrı ayrı çalıştıramıyoruz
function getPosts() {
    setTimeout( () => {
        posts.forEach(function (a){
            const div = document.createElement('div');
            div.innerHTML = `<strong> ${a.title} </strong> - ${a.body}`
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000) 
}
// error olduğu zaman onu nerede nasıl göstereceğimizi yazdığımız fonksiyon
function showError(error)
{ 
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`;
    document.getElementById('posts').appendChild(h3);
}

// post create ediyoruz ayrıca catch ve thenle kontrol ediyoruz
createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch(showError);




