// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['hello',15,3.14, false, true, null, undefined,10n,'-789', 'tree']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book ={
    title: 'The Witcher',
    pageCount: 343,
    genre: 'Fantasy'
};
let book1 ={
    title: 'Shadow',
    pageCount: 342,
    genre: 'psychology'
};
let book2 ={
    title:'Never Split the Difference',
    pageCount:340,
    genre:'psychology'
};
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book3 ={
    title: 'The Witcher',
    pageCount: 343,
    genre: 'Fantasy',
    authors:[{
        name : 'Andrzej Sapkowski',
        age: 75
    }]
};
let book4 ={
    title: 'Shadow',
    pageCount: 342,
    genre: 'psychology',
    authors:[{
        name: 'Carl Jung',
        age: 71
    }]
};
let book5 ={
    title:'Never Split the Difference',
    pageCount:340,
    genre:'psychology',
    authors: [{
        name: 'Chris Voss',
        age: 56
    }]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrUser = [
    { name:'Ira', username:'iris586', password:'44f5445'},
    { name:'Egor', username:'Eeger54', password:'dff77'},
    { name:'Oleksandr', username:'sanches', password:'mk55fd'},
    { name:'Olya', username:'olga', password:'njf555d'},
    { name:'Oksana', username:'ksenia', password:'ffdf4'},
    { name:'Yaroslav', username:'yarik', password:'dgghf8'},
    { name:'Pavlo', username:'pablo', password:'fdg48'},
    { name:'Marko', username:'makarov', password:'sdf45df'},
    { name:'Tetiana', username:'tati', password:'dfdgdg4'},
    { name:'Julia', username:'yulia', password:'eegss57df'},
]
console.log(arrUser[0].password)
console.log(arrUser[1].password)
console.log(arrUser[2].password)
console.log(arrUser[3].password)
console.log(arrUser[4].password)
console.log(arrUser[5].password)
console.log(arrUser[6].password)
console.log(arrUser[7].password)
console.log(arrUser[8].password)
console.log(arrUser[9].password)
// Логічні розгалуження:
//         - Є змінна х, якій ви надаєте довільне числове значення.
//         Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0
if ( x !== 0){
    console.log('virno');
}
else{
    console.log('ne virno');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 50
if (time<=15){
    console.log('first quarter');
}
else if (time>=16 && time<=30){
    console.log('second quarter');
}
else if(time>=30 && time<=45){
    console.log('third quarter');
}
else{
    console.log('fourth quarter');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половиу(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 5
if (day<=10 ){
    console.log('first decade');
}
else if(day>=11 && day<=20 ){
    console.log('second decade');
}
else if (day>=20 && day<=31) {
    console.log('third decade')
}

// - Скласти розклад на тиждень за домопоги switch.
//   Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let sequenceNumber = prompt('enter sequence number from 1 to 7') ;
  switch (sequenceNumber) {
      case '1':
          alert('Monday');
          break;
      case '2':
          alert('Tuesday');
          break;
      case '3':
          alert('Wednesday');
          break;
      case '4':
          alert('Thursday')
          break;
      case '5':
          alert('Friday')
          break;
      case '6':
          alert('Saturday');
          break;
      case '7':
          alert('Sunday');
          break;
      default:
          alert('????????');
  }
  // - Користувач вводить або має два числа.
  //         Потрібно знайти та вивести максимальне число з тих двох .
  //         Також потрібно врахувати коли введені рівні числа.
let a = 10;
let b = 10;
if (a>b){
  alert(a);
}
else if (a<b){
    alert(b);
}
else if (a===b){
    alert('equal number');
}
//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//           за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let c = '';
if (c === ''|| c === 1 || c === undefined || c === null){
    c = 'default';
}
console.log(c);
//   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//           У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>=5 ){
    console.log(coursesAndDurationArray[0].title,'Супер');
}
else {
    console.log('not good')
}
if (coursesAndDurationArray[1].monthDuration>=5 ){
    console.log(coursesAndDurationArray[1].title,'Супер');
}
else {
    console.log('not good')
}
if (coursesAndDurationArray[2].monthDuration>=5 ){
    console.log(coursesAndDurationArray[2].title,'Супер');
}
else {
    console.log('not good')
}
if (coursesAndDurationArray[3].monthDuration>=5 ){
    console.log(coursesAndDurationArray[3].title,'Супер');
}
else {
    console.log('not good')
}
if (coursesAndDurationArray[4].monthDuration >=5 ){
    console.log(coursesAndDurationArray[4].title,'Супер');
}
else {
    console.log('not good')
}
if (coursesAndDurationArray[5].monthDuration >=5 ){
    console.log(coursesAndDurationArray[5].title,'Супер');
}
else {
    console.log('not good')
}