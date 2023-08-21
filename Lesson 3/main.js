// <!--    - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині-->
for (let i = 0; i<10; i++){
    document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem cupiditate dolore dolorem, earum esse et expedita fugiat fugit illo mollitia nemo repellendus reprehenderit repudiandae vero voluptates!
    Dolorum explicabo itaque quia!</p></div>`)
}
<!--    - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині-->
for (let i = 0; i<10; i++){
    document.write(`${i}<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Autem cupiditate dolore dolorem, earum esse et expedita fugiat fugit illo mollitia nemo repellendus reprehenderit repudiandae vero voluptates!
    Dolorum explicabo itaque quia!</p></div>`)
}
<!--    - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.-->
let i=0;
while (i < 20){
    document.write(`<div><h1>Some text</h1></div>`);
    i++;
}
<!--    - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.-->
let a=0;
while (a < 20){
    document.write(`${a}<div><h1>Some text</h1></div>`);
    a++;
}
<!--    - Використовуючи данні з масиву, за допомоги document.write та циклу-->
<!--    побудувати структуру по шаблону-->
<!--    Масив:-->

   // let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

<!--    ШАБЛОН:-->
<!--    <ul>-->
// <!--        <li>ITEM OF ARRAY</li>-->
// <!--        &lt;!&ndash;-->
// <!--            і тд інші об'єкти масиву-->
// <!--             ...-->
// <!--             ...-->
// <!--             ...-->
// <!--        &ndash;&gt;-->
// <!--    </ul>-->
//
// <!--    замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву-->
for( let i =0; i<1; i++){
    document.write(`<ul>
<li>html</li>
<li>css</li>
<li>javascript</li>
<li>mysql</li>
<li>mongodb</li>
<li>react</li>
<li>angular</li>
<li>node.js</li>
</ul>`)
}

// користовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

for( let i =0;  i < 1; i++){
    document.write(`<div class="product-card">
 <h3 class="product-title">Milk. Price - 22</h3>
 <img src="https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg" alt="milk" class="product-image">
 
 <h3 class="product-title">Juice. Price - 27</h3>
 <img src="https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg" alt="juice" class="product-image">
 
 <h3 class="product-title">Tomato. Price - 47</h3>
 <img src="https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74" alt="tomato" class="product-image">
 
 <h3 class="product-title">Tea. Price - 15</h3>
 <img src="https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png" alt="tea" class="product-image">
 
 </div>`)
}
// є масив
/*let users = [
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
];*/
// за допомоги циклу вивести:
// - користувачів зі статусом true
for (let user of users) {
    if (user.status){
        document.write(`<div>${user.name} -${user.age} -${user.status}</div>`)
    }
}
document.write(`<br>`)
// - користувачів зі статусом false
for (let user of users) {
    if (!user.status){
        document.write(`<div>${user.name} -${user.age} -${user.status} </div>`)
    }
}
document.write(`<br>`)
// - користувачів які старші за 30 років
for (let user of users) {
    if (user.age>30) /*if (user.age>=30)*/{
        document.write(`<div>${user.name} -${user.age} -${user.status} </div>`)
    }
}