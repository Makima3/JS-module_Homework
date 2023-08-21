// --створити масив з:
// - з 5 числових значень
let numbers =[54,26,89,1,456];
console.log(numbers);

// - з 5 стічкових значень
let string =['tree','ground', 'false','fire','letter'];
console.log(string);

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let anything = [false, true, 45,'second',23.6]
console.log(anything);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArr = [];
for (let i = 0; i<=emptyArr.length; i++){
    emptyArr[0] ='peugeot';
    emptyArr[1] =true;
    emptyArr[2] =215.4;
    emptyArr[3] =4;
    emptyArr[4] ='flower';
    emptyArr[5] =false;
}
console.log(emptyArr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arrForWhile = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i<1 ){
    console.log(arrForWhile);
    i++;
}
// 2. перебрати його циклом for
let arrFor = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i<0; i++){
}
console.log(arrFor)

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arrWhileOdd = [2,17,13,6,22,31,45,66,100,-18];
let j = 0;
while (j<arrWhileOdd.length){
    if (j % 2 )
    console.log(arrWhileOdd[j])
    j++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arrForOdd = [2,17,13,6,22,31,45,66,100,-18];
for(let a =0; a<arrForOdd.length; a++){
    if (a % 2)
    console.log(arrForOdd[a]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let arrWhileEven = [2,17,13,6,22,31,45,66,100,-18];
let l = 0;
while (l<arrWhileEven.length){
    if (arrWhileEven[l] % 2===0 )
        console.log(arrWhileEven[l])
    l++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
let arrForEven = [2,17,13,6,22,31,45,66,100,-18];
for(let o =0; o<arrForEven.length; o++){
    if ( arrForEven[o] % 2===0)
        console.log(arrForEven[o]);
}
// 7. замінити кожне число кратне 3 на слово "okten"
let multiples = [2,17,13,6,22,31,45,66,100,-18];
for(let c =0; c<multiples.length; c++){
   if(multiples[c] % 3===0){
       multiples[c]='okten'
   }
    }
  console.log(multiples);

// 8. вивести масив в зворотньому порядку.
let multiples1 = [2,17,13,6,22,31,45,66,100,-18];
for(let h =multiples1.length-1; h>0; h--){
    if(multiples1[h] % 3===0){
        multiples1[h]='okten'
    }
    console.log(multiples1[h]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let numbersReverse =[54,26,89,1,456];
for (let w= numbersReverse.length-1; w>0; w-- ){
    console.log(numbersReverse[w])
}

let stringReverse =['tree','ground', 'false','fire','letter'];
for(let s= stringReverse.length-1; s>0; s--){
    console.log(string[s]);
}

let anythingReverse = [false, true, 45,'second',23.6];
for (let n = anythingReverse.length-1; n>0; n--){
    console.log(anythingReverse[n]);
}

// let emptyArrReverse = [];
// for (let some = emptyArrReverse.length-1; some>0; some--){
//     emptyArrReverse[0] ='peugeot';
//     emptyArrReverse[1] =true;
//     emptyArrReverse[2] =215.4;
//     emptyArrReverse[3] =4;
//     emptyArrReverse[4] ='flower';
//     emptyArrReverse[5] =false;
//     console.log(emptyArrReverse);
// }

//1.
let arrForWhileReverse = [2,17,13,6,22,31,45,66,100,-18];
let k = arrForWhileReverse.length-1;
while (k>1 ){
    console.log(arrForWhileReverse[k]);
    k--;
}
//2.
let arrForReverse = [2,17,13,6,22,31,45,66,100,-18];
for (let i = arrForReverse.length-1; i>1; i--){
    console.log(arrForReverse[i])
}
//3.
let arrWhileOddReverse = [2,17,13,6,22,31,45,66,100,-18];
let v = arrWhileOddReverse.length-1;
while (v>0){
    if (v % 2 )
        console.log(arrWhileOddReverse[v])
    v--;
}

//4.
let arrForOddReverse = [2,17,13,6,22,31,45,66,100,-18];
for(let y =arrForOddReverse.length-1; y>0; y--){
    if (y % 2)
        console.log(arrForOddReverse[y]);
}
//5.
let arrWhileEvenReverse = [2,17,13,6,22,31,45,66,100,-18];
let u = arrWhileEvenReverse.length-1;
while (u>0){
    if (arrWhileEvenReverse[u] % 2===0 )
        console.log(arrWhileEvenReverse[u])
    u--;
}
//6.
let arrForEvenReverse = [2,17,13,6,22,31,45,66,100,-18];
for(let t =arrForEvenReverse.length-1; t>0; t--){
    if (arrForEvenReverse[t] % 2===0)
        console.log(arrForEvenReverse[t]);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let randomArr =[1,25,54,57,359,35,238,21998,388,35]
for(let number of randomArr){
}
console.log(randomArr);

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArr =['sun','fire', 'wall','witcher','juice','operator','surgery', 'false','true','544']
for (let string1 of stringArr) {
}
console.log(stringArr)

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anyArr= [false, true, 5548,56.2, 'leaf' ,'volvo','nissan',65,'audi','vw']
for (let anyArrElement of anyArr) {
}
console.log(anyArr)
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrDifference =[false, true, 'toyota',564,2.2, 'chevrolet', 'range', true, true,23]
for(let g=0; g<arrDifference.length; g++){
if(typeof arrDifference[g] ==='boolean'){
    console.log(arrDifference[g]);
}
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrDifference1 =[false, true, 'toyota',564,2.2, 'chevrolet', 'range', true, true,23]
for(let k=0; k<arrDifference1.length; k++){
    if(typeof arrDifference1[k] ==='number'){
        console.log(arrDifference1[k]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrDifference2 =[false, true, 'toyota',564,2.2, 'chevrolet', 'range', true, true,23]
for(let f=0; f<arrDifference2.length; f++){
    if(typeof arrDifference2[f] ==='string'){
        console.log(arrDifference2[f]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray =[];
for (let m = 0; m < 10; m++) {
   emptyArray[0] = 'BMW';
   emptyArray[1] = 'citroen';
   emptyArray[2] = 545;
   emptyArray[3] = false;
   emptyArray[4] = 2.3;
   emptyArray[5] = true;
   emptyArray[6] = false;
   emptyArray[7] = 'renault';
   emptyArray[8] = 455.3;
   emptyArray[9] = 'mercedes';
}
console.log(emptyArray);
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let justArr =[false, true, 'toyota',564,2.2, 'chevrolet', 'range', true, true,23]
for (let ii = 0; ii< 10; ii++) {
    console.log(ii++)
}
document.write(`${justArr[ii++]}`)

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let ii = 0; ii< 100; ii++) {
    console.log(ii++)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор










