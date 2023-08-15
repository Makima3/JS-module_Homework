//     - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//         Вивести кожну змінну за допомогою: console.log
let greet = 'hello';
console.log(greet);

let aa = 'owu';
console.log(aa);

let bb = 'com';
console.log(bb);

let cc = 'ua';
console.log(cc);

let num = 1;
console.log(num);

let num1 = 10;
console.log(num1);

let minNum = -999;
console.log(minNum);

let num2 = 123;
console.log(num2);

let pi = 3.14;
console.log(pi);

let fraction = 2.7;
console.log(fraction);

let int = 16;
console.log(int);

let boolTrue = true;
console.log(boolTrue);

let boolFalse = false;
console.log( boolFalse);

//     - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Nataliia';
let middleName = 'Oleksandrivna';
let lastName = 'Kolchuk';
let person = firstName+' '+middleName+' '+lastName;
console.log(person);
//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//         let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

//     Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Name','Nataliia');
console.log(name);

let midName = prompt('Middle Name', 'Oleksandrivna');
console.log(midName);

let age = + prompt('age', '24');
console.log(age);