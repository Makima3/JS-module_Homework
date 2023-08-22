//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRectangle = (a,b) =>{
    return(a * b);
}
console.log(squareRectangle(8,5));
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let  squareCircle= (r)=>{
    return (Math.PI * r **2);
}
console.log(squareCircle(6));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calculateSquareCylinder = (rad,h)=>{
    return (2*Math.PI*rad*(rad+h));
}
console.log(calculateSquareCylinder(8,9));
//- створити функцію яка приймає масив та виводить кожен його елемент
let array = [10,'bird',true, 63.2,false];
let arrayUsers1= (arr) =>{
    for(const item of arr){
        console.log(`${item}`);
    }
}
arrayUsers1(array);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (p)=>{
    document.write(p)
}
text('lorem')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text1 = (r)=>{
    document.write(`<ul>
<li>${r}</li>
<li>${r}</li>
<li>${r}</li>
</ul>`)
}
text1( 'some text')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let loop= (text,sum)=>{
    let someVariable =''
    for (let i=0; i<sum;i++){
        someVariable+=`<li>${text}</li>`
    }
    document.write(`<ul>${someVariable}</ul>`)
}
loop('text2', 7)
loop('any', 5)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitives1 = (array)=>{
    let someVariable =''
    for (let i=0; i<array.length;i++){
        someVariable+=`<li>${array[i]}</li>`
    }
    document.write(`<ul>${someVariable}</ul>`);
}
primitives1([false, true, 'tree',5,63,58],);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let user = (array)=>{

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
        id: 2,
        name: 'vika',
        age:45
    },
    {
        id: 3,
        name: 'igor',
        age:23
    },
]
user(arr)
//- створити функцію яка повертає найменьше число з масиву
let minim1 =(array)=>{
    return Math.min(...array)
}
let x1 = minim1([1,5,64,645,358,4])
console.log(x1)
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let suma1 = (array)=>{
    let sum = 0
    for (let i=0;i<array.length; i++){
        sum+=array[i]
    }
    return sum
}
console.log(suma1([1,5,64,645,358,4]))
console.log(suma1([15,65,25]))
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let someFunction1 = (arr, index1,index2)=>{
    let temp = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=temp
}
a= [12,58,63,236]
someFunction1(a, 0,1)
console.log(a)
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency). Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    for (const currencyV of currencyValues){
        if (currencyV.currency===exchangeCurrency)
        {
            return sumUAH/currencyV.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))