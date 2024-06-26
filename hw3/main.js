// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині'
for (let i = 0; i < 10; i++) {
    document.write('<div>Some text </div>')
    document.write('<hr/>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text ${i}</div>`)
    document.write('<hr/>')
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let someDiv = 0
while (someDiv < 20) {
    document.write(`
    <div>
    
    <li>Some text </li>
    
    <div/>
        <hr/>`)
    someDiv++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let someDi = 0
while (someDi < 20) {
    document.write(`
    <div>
    
    <li>Some ${someDi} </li>
    
    <div/>
        <hr/>`)
    someDi++
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


//// document.write('<ul>');
//// for (let item of listOfItems) {
////
////     document.write(`<li>${item}</li>
////      <hr/>`);
//// }
//// document.write('<ul>');

document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {

    document.write(`<li>${listOfItems[i]}</li>
<hr/>`);
}
document.write('<ul>');
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

for (let product of products) {

    document.write(`<div>
                            <h2>${product.title} - ${product.price} UAH</h2>
                            <img style="
                            width: 200px;
                             height: auto" 
                             src="${product.image}" 
                             alt="img">

                      </div>`);
}
// let i = 0;
// while (i < products.length) {
//     let product = products[i];
//     document.write(`<div>
//         <h2>${product.title} - ${product.price} UAH</h2>
//         <img style="width: 200px; height: auto;" src="${product.image}" alt="img">
//     </div>`);
//     i++;
// }

// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status) {
        document.write(`<hr/>`)
        document.write(`<div>Name: ${user.name} <br/> Age: ${user.age} Status: ${user.status}</div>`);

    }
}
// - користувачів зі статусом false

for (const user of users) {
    if (!user.status) {
        document.write(`<hr/>`)
        document.write(`<div>Name: ${user.name} <br/> Age: ${user.age} Status: ${user.status}</div>`);

    }
}
// - користувачів які старші за 30 років

for (const user of users) {
    if (user.age>30) {
        document.write(`<hr/>`)
        document.write(`<div>Name: ${user.name} <br/> Age: ${user.age} Status: ${user.status}</div>`);

    }
}
