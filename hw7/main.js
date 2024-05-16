// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "John", "Doe", "john.doe@example.com", "+1234567890"),
    new User(45, "Jane", "Smith", "jane.smith@example.com", "+1987654321"),
    new User(3, "Michael", "Johnson", "michael.johnson@example.com", "+1122334455"),
    new User(22, "Emily", "Williams", "emily.williams@example.com", "+1567890123"),
    new User(5, "Daniel", "Brown", "daniel.brown@example.com", "+1654327890"),
    new User(88, "Emma", "Jones", "emma.jones@example.com", "+1789054321"),
    new User(7, "Christopher", "Miller", "christopher.miller@example.com", "+1908765432"),
    new User(38, "Olivia", "Davis", "olivia.davis@example.com", "+1345678901"),
    new User(79, "William", "Garcia", "william.garcia@example.com", "+1223344556"),
    new User(10, "Ava", "Martinez", "ava.martinez@example.com", "+1456789012")
];
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const arrayFiltered = users.filter(value => value.id % 2 === 0)
console.log(arrayFiltered)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const arraySorted = users.sort((a, b) => a.id - b.id)
console.log(arraySorted)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayClient = [];

arrayClient.push(new Client(13, "John", "Doe", "john.doe@example.com", "+1234567890", ["Item1_1", "Item1_3"]));
arrayClient.push(new Client(4, "Jane", "Smith", "jane.smith@example.com", "+1987654321", ["Item2_1", "Item2_2", "Item2_3"]));
arrayClient.push(new Client(12, "Michael", "Johnson", "michael.johnson@example.com", "+1122334455", ["Item3_3"]));
arrayClient.push(new Client(777, "Emily", "Williams", "emily.williams@example.com", "+1567890123", ["Item4_1", "Item7_2", "Item4_2", "Item4_3"]));
arrayClient.push(new Client(5, "Daniel", "Brown", "daniel.brown@example.com", "+1654327890", ["Item5_1", "Item5_2", "Item7_2", "Item7_2", "Item7_2", "Item5_3"]));
arrayClient.push(new Client(6, "Emma", "Jones", "emma.jones@example.com", "+1789054321", ["Item6_1", "Item6_2", "Item7_2", "Item7_2", "Item7_2", "Item6_3"]));
arrayClient.push(new Client(456, "Christopher", "Miller", "christopher.miller@example.com", "+1908765432", ["Item7_1", "Item7_2", "Item7_3"]));
arrayClient.push(new Client(7, "Olivia", "Davis", "olivia.davis@example.com", "+1345678901", ["Item8_1", "Item7_2", "Item7_2", "Item8_3"]));
arrayClient.push(new Client(22, "William", "Garcia", "william.garcia@example.com", "+1223344556", ["Item8_1", "Item7_2", "Item7_2", "Item8_3"]));
arrayClient.push(new Client(101, "Ava", "Martinez", "ava.martinez@example.com", "+1456789012", ["Item10_1", "Item7_2", "Item7_2", "Item10_2", "Item10_3"]));

console.log(arrayClient);


////______________________________________Variant_1
// let arrayClient = [];
// for (let i = 0; i < 10; i++) {
//     arrayClient.push(new Client(
//         i + 1,
//         `Name${i + 1}`,
//         `Surname${i + 1}`,
//         `email${i + 1}@example.com`,
//         `+1234567890${i}`,
//         [`Item${i + 1}_1`, `Item${i + 1}_2`, `Item${i + 1}_3`]
//     ));
// }
// console.log(arrayClient)
////______________________________________Variant_2
// let arrayClient1 = Array(10).fill().map((_, i) =>
//     new Client(
//         i + 1,
//         `Name${i + 1}`,
//         `Surname${i + 1}`,
//         `email${i + 1}@example.com`,
//         `+1234567890${i}`,
//         [`Item${i + 1}_1`, `Item${i + 1}_2`, `Item${i + 1}_3`]
//     )
// );
//
// console.log(arrayClient1);
////______________________________________Variant_3
// let arrayClient = [];
// //
// Array(10).fill().forEach((_, i) => {
//     arrayClient.push(new Client(
//         i + 1,
//         `Name${i + 1}`,
//         `Surname${i + 1}`,
//         `email${i + 1}@example.com`,
//         `+1234567890${i}`,
//         [`Item${i + 1}_1`, `Item${i + 1}_2`, `Item${i + 1}_3`]
//     ));
// });
//
// console.log(arrayClient);
//////_____________________________________Variant_4
// let clientData = [
//     { id: 1, name: "John", surname: "Doe", email: "john.doe@example.com", phone: "+1234567890", order: ["Item1_1", "Item1_2", "Item1_3"] },
//     { id: 2, name: "Jane", surname: "Smith", email: "jane.smith@example.com", phone: "+1987654321", order: ["Item2_1", "Item2_2", "Item2_3"] },
//     { id: 3, name: "Michael", surname: "Johnson", email: "michael.johnson@example.com", phone: "+1122334455", order: ["Item3_1", "Item3_2", "Item3_3"] },
//     { id: 4, name: "Emily", surname: "Williams", email: "emily.williams@example.com", phone: "+1567890123", order: ["Item4_1", "Item4_2", "Item4_3"] },
//     { id: 5, name: "Daniel", surname: "Brown", email: "daniel.brown@example.com", phone: "+1654327890", order: ["Item5_1", "Item5_2", "Item5_3"] },
//     { id: 6, name: "Emma", surname: "Jones", email: "emma.jones@example.com", phone: "+1789054321", order: ["Item6_1", "Item6_2", "Item6_3"] },
//     { id: 7, name: "Christopher", surname: "Miller", email: "christopher.miller@example.com", phone: "+1908765432", order: ["Item7_1", "Item7_2", "Item7_3"] },
//     { id: 8, name: "Olivia", surname: "Davis", email: "olivia.davis@example.com", phone: "+1345678901", order: ["Item8_1", "Item8_2", "Item8_3"] },
//     { id: 9, name: "William", surname: "Garcia", email: "william.garcia@example.com", phone: "+1223344556", },
//     { id: 10, name: "Ava", surname: "Martinez", email: "ava.martinez@example.com", phone: "+1456789012", order: ["Item10_1", "Item10_2", "Item10_3"] }
// ];

// let arrayClient = [];
//
// clientData.forEach(data => {
//     arrayClient.push(new Client(
//         data.id,
//         data.name,
//         data.surname,
//         data.email,
//         data.phone,
//         data.order || []
//     ));
// });
//
// console.log(arrayClient);
// function Client(id, name, surname, email, phone, order) {
//     User.call(this, id, name, surname, email, phone)
//     this.order = order;
// }
//
//
// const newClients = [
//     { id: 1, name: "John", surname: "Doe", email: "john.doe@example.com", phone: "+1234567890", order: ["Item1_1", "Item1_2", "Item1_3"] },
//     { id: 2, name: "Jane", surname: "Smith", email: "jane.smith@example.com", phone: "+1987654321", order: ["Item2_1", "Item2_2", "Item2_3"] },
//     { id: 3, name: "Michael", surname: "Johnson", email: "michael.johnson@example.com", phone: "+1122334455", order: ["Item3_1", "Item3_2", "Item3_3"] },
//     { id: 4, name: "Emily", surname: "Williams", email: "emily.williams@example.com", phone: "+1567890123", order: ["Item4_1", "Item4_2", "Item4_3"] },
//     { id: 5, name: "Daniel", surname: "Brown", email: "daniel.brown@example.com", phone: "+1654327890", order: ["Item5_1", "Item5_2", "Item5_3"] },
//     { id: 6, name: "Emma", surname: "Jones", email: "emma.jones@example.com", phone: "+1789054321", order: ["Item6_1", "Item6_2", "Item6_3"] },
//     { id: 7, name: "Christopher", surname: "Miller", email: "christopher.miller@example.com", phone: "+1908765432", order: ["Item7_1", "Item7_2", "Item7_3"] },
//     { id: 8, name: "Olivia", surname: "Davis", email: "olivia.davis@example.com", phone: "+1345678901", order: ["Item8_1", "Item8_2", "Item8_3"] },
//     { id: 9, name: "William", surname: "Garcia", email: "william.garcia@example.com", phone: "+1223344556", },
//     { id: 10, name: "Ava", surname: "Martinez", email: "ava.martinez@example.com", phone: "+1456789012", order: ["Item10_1", "Item10_2", "Item10_3"] }
// ];
//
// console.log(newClients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
const sortedClient = arrayClient.sort((a, b) => a.order.length - b.order.length)
console.log(sortedClient)

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car1(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log('****** INFO ******');
        for (const key in this) {
            if (typeof this[key] === 'function') {
                continue;
            }
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('****** INFO ******');
    }


    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (addedDriver) {
        this.driver = addedDriver;
    }
}

const car1 = new Car1('Land Cruiser', 'Toyota', 2022, 300, 4.6);

car1.drive();
car1.info();
car1.increaseMaxSpeed(30);
car1.changeYear(2024);


function Driver(name, year) {
    this.name = name;
    this.year = year;
}

const driver = new Driver('Danylo', 2001);
car1.addDriver(driver);
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    info() {
        console.log('_______INFO_______');
        for (const key in this) {
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('_______INFO_______');
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed(addedSpeed) {
        this.maxSpeed += addedSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(addedDriver) {
        this.driver = addedDriver;
    }
}

const car2 = new Car2('R7', 'Audi', 2022, 430, 3.0);

car2.drive();
car2.info()
car2.increaseMaxSpeed(100);
car2.changeYear(2024);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Driver2 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const driver2 = new Driver2('Danylo', 2001);
car2.addDriver(driver2);
car2.info();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}

class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }

    findedPrincess1(arr) {
        for (const popelushka of arr) {
            if (popelushka.footSize === this.bootSize) {
                return popelushka;
            }
        }
    }

    findedPrincess2(arr) {
        return arr.find((popelushka) => popelushka.footSize === this.bootSize)
    }
}

const popelArr = [
    new Popelushka('Natalia', 30, 37),
    new Popelushka('Olga', 35, 39),
    new Popelushka('Maria', 28, 37),
    new Popelushka('Viktoria', 33, 38),
    new Popelushka('Yulia', 25, 40),
    new Popelushka('Svetlana', 40, 36),
    new Popelushka('Elena', 32, 38),
    new Popelushka('Igor', 28, 42),
    new Popelushka('Alexandra', 22, 35),
    new Popelushka('Dmitry', 29, 41)
];
const prince = new Prince('Mommy', 30, 40);
console.log(prince.findedPrincess1(popelArr));
console.log('_______INFO_______');
console.log(prince.findedPrincess2(popelArr));