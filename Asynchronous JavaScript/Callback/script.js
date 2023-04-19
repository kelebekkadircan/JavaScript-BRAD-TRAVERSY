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
// callback oluşturmak için cb fonksiyonunu ekliyoruz 
function createPost(post, cb)
{
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}
// postları alabiliyoruz bu fonksiyon sayesinde 
// bu daha önce çalıştığı için ayrı ayrı çalıştıramıyoruz
function getPosts() {
    setTimeout( () => {
        posts.forEach(function (a){
            const div = document.createElement('div');
            div.innerHTML = `<strong> ${a.title} </strong> - ${a.body}`
            document.querySelector('#posts').appendChild(div);
        })
    }, 1000 ) 
}
// create post ikinci parametresine get post vererek callback alıyoruz
createPost({title: 'Post three', body: 'This is post three'}, getPosts);




