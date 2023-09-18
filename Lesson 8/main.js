//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let users = [
    new User (1,'Alex', 'Johnson', 'alex@gmail.com', 147852369),
    new User (2,'John', 'Willson', 'willson@gmail.com',369852147),
    new User (3,'Max', 'Christensen', 'max@gmail.com', 789625523),
    new User (4,'Nick', 'Marckart', 'nick@gmail.com', 258852123),
    new User (5,'Leonard', 'Bonart', 'bonart@gmail.com', 145682369),
    new User (6,'Chriss', 'Merphy', 'chriss@gmail.com', 147741456),
    new User (7,'Ron', 'Mickelsen', 'ron@gmail.com', 175395149),
    new User (8,'Miranda', 'Reinar', 'mara@gmail.com', 159875353),
    new User (9,'Sabrina', 'Shostak', 'sabr@gmail.com', 147845669),
    new User (10,'April', ' Renson', 'april@gmail.com', 258746352)
]
console.log(users);
//- Взяти масив User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let oddIdUsers = users.filter( users => users.id %2===0);console.log(oddIdUsers);
//- Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortIdUsers = users.sort(( a,b) => a.id - b.id);console.log (sortIdUsers);
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client..
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order= order;
    }
}
let clients = [
    new Client (1,'Alex', 'Johnson', 'alex@gmail.com', 147852369, ['pen', 'box','notebook']),
    new Client (2,'John', 'Willson', 'willson@gmail.com',369852147,['book', 'pen', 'apple','box','notebook']),
    new Client (3,'Max', 'Christensen', 'max@gmail.com', 789625523,['book', 'notebook']),
    new Client (4,'Nick', 'Marckart', 'nick@gmail.com', 258852123,['book', , 'box','notebook']),
    new Client (5,'Leonard', 'Bonart', 'bonart@gmail.com', 145682369,['book', 'pen', 'box','notebook']),
    new Client (6,'Chriss', 'Merphy', 'chriss@gmail.com', 147741456,['book', 'pen', 'box', 'pencil','letter','notebook']),
    new Client (7,'Ron', 'Mickelsen', 'ron@gmail.com', 175395149,['book', 'pen', 'box','bag','notebook']),
    new Client (8,'Miranda', 'Reinar', 'mara@gmail.com', 159875353,['book', 'pen', 'box']),
    new Client (9,'Sabrina', 'Shostak', 'sabr@gmail.com', 147845669,['book', 'notebook']),
    new Client(10,'April', ' Renson', 'april@gmail.com', 258746352,['book', 'pen', 'box','notebook'])
]
console.log (clients);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients =clients.sort((a,b) => a.order.length - b.order.length);
console.log(sortedClients);
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacturer, year, maxSpeed, enginePower) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.enginePower = enginePower;
    this.driver = {};
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] === 'function') {
                continue;
            }
            console.log(this[key]);
        }
        this.addToDriver = function (name, age, licence) {
            this.driver = {name, age, licence}
            console.log(this.driver);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
            newSpeed = 50;
            console.log(this.maxSpeed);
        }
        this.changeYear = function (newYear) {
            this.year = newYear;
            newYear = 2020;
            console.log(this.year);
        }
    }
}
let car = new Car('audi','German',2018,220,4.0);
console.log(car);
car.drive();
car.info();
car.addToDriver('Alex', 25, true);
car.increaseMaxSpeed(50);
car.changeYear(2020);
//- (Те саме, тільки через клас)//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1 {
    constructor(model, manufacturer, year, maxSpeed, enginePower) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginePower = enginePower;
        this.driver = {};
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info(){
        for (const key in this) {
            // if (typeof this[key] === 'function') {
            //     continue;
            // }
            console.log(this[key]);
        }
    }
    addToDriver (name, age, licence) {
        this.driver = {name, age, licence}
        console.log(this.driver);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        newSpeed = 50;
        console.log(this.maxSpeed);
    }
    changeYear(newYear) {
        this.year = newYear;
        newYear = 2020;
        console.log(this.year);
    }
}
let car1 = new Car1('audi','German',2018,220,4.0);
console.log(car1);
car1.drive();
car1.info();
car1.addToDriver('Alex', 25, true);
car1.increaseMaxSpeed(50);
car1.changeYear(2020);
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.
function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let arrCin = [
    new Cinderella('Cinderella1', 28, 39 ),
    new Cinderella('Cinderella2', 36, 40 ),
    new Cinderella('Cinderella3', 22, 38 ),
    new Cinderella('Cinderella4', 34, 31 ),
    new Cinderella('Cinderella5', 19, 36 ),
    new Cinderella('Cinderella6', 15, 42 ),
    new Cinderella('Cinderella7', 21, 40.5 ),
    new Cinderella('Cinderella8', 39, 37 ),
    new Cinderella('Cinderella9', 50, 44 ),
    new Cinderella('Cinderella10', 29, 39.5 )
]
let Prince = class {
    constructor(name, age,bootSize) {
        this.name = name;
        this.age = age;
        this.bootSize = bootSize;
    }
}
// let prince = new Prince('prince1', 45, 38)
// function findCin () {
//     for (const cin of arrCin) {
//         if( cin.footSize===prince.bootSize);
//         return cin;
// }
// }