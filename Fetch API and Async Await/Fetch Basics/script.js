//  json dosyasını getirmek için kullanılır ( fetching )
fetch('movies.json')
.then((response) => response.json())
.then((data) => console.log(data));

//  Txt dosyasını getirmek için text fonksiyonunu kullanabiliriz ( fetching)
fetch('text.txt')
.then((response) => response.text()) 
.then((data) => console.log(data));

//  API dan getirmek için 
fetch('https://api.github.com/users/kelebekkadircan')
.then((response) => response.json()) 
.then((data) => (document.querySelector('h1').textContent = data.login));















