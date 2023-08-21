//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let a = 8;
let b = 5;
let square = a * b;
function squareRectangle (a,b){
    console.log(8 * 5);
}
squareRectangle(square);
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let r = 5;
let squareC = Math.PI * Math.pow(r, 2);
function squareCircle(r){
    console.log(squareC);
}
squareCircle(squareC);
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S =  2πR(H + R)
let h = 7;
let rad = 3;
let squareCylinder = 2*Math.PI*rad*(h+rad);
function calculateSquareCylinder (){
    console.log(squareCylinder);
}
calculateSquareCylinder(squareCylinder);

//- створити функцію яка приймає масив та виводить кожен його елемент

function array(users){
    for(const user of users){
    console.log(users)
    }
}
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
array(users);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(p){
document.write(p)
}
text('lorem')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function text1(r){
    document.write(`<ul>
<li>${r}</li>
<li>${r}</li>
<li>${r}</li>
</ul>`)
}
text1( 'some text')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function loop(text,sum){
    let someVariable =''
    for (let i=0; i<sum;i++){
        someVariable+=`<li>${text}</li>`
    }
    document.write(`<ul>${someVariable}</ul>`)
}
loop('text2', 7)
loop('any', 5)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitives (array){
    let someVariable =''
    for (let i=0; i<array.length;i++){
        someVariable+=`<li>${array[i]}</li>`
    }
    document.write(`<ul>${someVariable}</ul>`)
}
primitives([false, true, 'tree',5,63,58],)
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function user (array){

    for (let i=0; i<array.length;i++){
    document.write(`<div>${array[i].id}, ${array[i].name}, ${array[i].age}</div>`)
    }

    }

let arr =[
    {
    id: 1,
    name: 'ira',
    age:5
},
{
    id: 1,
    name: 'ira',
    age:5
},
{
    id: 1,
    name: 'ira',
    age:5
},
]
user(arr)
//- створити функцію яка повертає найменьше число з масиву
function minim (array){
    return Math.min(...array)
}
let x = minim([1,5,64,645,358,4])
console.log(x)
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function suma (array){
    let sum = 0
    for (let i=0;i<array.length; i++){
        sum+=array[i]
    }
    return sum
}
console.log(suma([1,5,64,645,358,4]))
console.log(suma([15,65,25]))
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function someFunction (arr, index1,index2){
    let temp = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=temp
}
a= [12,58,63,236]
someFunction(a, 0,1)
console.log(a)
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH, currencyValues, exchangeCurrency) {

    for (const currencyV of currencyValues){
        if (currencyV.currency===exchangeCurrency)
        {
            return sumUAH/currencyV.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))