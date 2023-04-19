// // callback fonksiyonunu 1.3 saniyede bir çalıştırdığımız constant değer 
// // set intervali bir const un içinde tanımlayabildiğimizi gösterir
// const intervalID = setInterval(myCallback,1300,'Hello');
// // anlık zamanı consola yazdıran fonksyion
// function myCallback (a) {
//     console.log(a,Date.now());
// }

// 
let intervalID ;
// 
function startChange()
{
    if (!intervalID) {
        intervalID = setInterval(changeRandomColor,800);
    }
}

// // arka planı ve yazı rengini değiştiren fonksiyon
// function changeColor ( )
// {
//     if (document.body.style.backgroundColor !== 'black')
//     {
//         document.body.style.backgroundColor = 'black' ;
//         document.body.style.color = 'white';
//     }
//     else
//     {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

// dom ve math ile rastgele renk oluşturan fonksiyon
function changeRandomColor()
{
    
    const randomColor = Math.floor(Math.random()* 16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = `#${randomColor}`;
    
}


//  tıkladığımız zaman değişimi durdurmamızı sağlayan fonksiyon
function stopChange () 
{
    clearInterval(intervalID);
}

// dom manipülasyonu ile id seçip değişimi durdurduk ve başlattık click event kullandım
document.getElementById('stop',addEventListener('click',stopChange));
document.getElementById('start',addEventListener('click',startChange));
