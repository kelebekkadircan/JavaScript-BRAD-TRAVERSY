
//  sealing özellik ekleme ve çıkarmasını önler ama hala değiştirilir
//  freezing ise hepsini önler

const rectObj =
{
    name:'Rectangle 1',
    width:11,
    height:21
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj); 

// Object.seal(rectObj)


console.log(descriptors); 

// console.log('kadir');


rectObj.color ='red'
//  EKLEME VE SİLME YAPILMIYOR AMA VAR OLANLARI DEĞİŞTİREBİLİYORUZ 

// freeze() kullanırsak ne ekleriz ne çıkarırız ne de değiştirebiliriz 
















