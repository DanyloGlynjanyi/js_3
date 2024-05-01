// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let h = 'hello'
console.log(h)
let o = 'owu'
console.log(o)
let c = 'com'
console.log(c)
let u = 'ua'
console.log(u)
let n1 = 1
console.log(n1)
let n2 = 10
console.log(n2)
let n3 = -999
console.log(n3)
let n4 = 123
console.log(n4)
let n5 = 3.14
console.log(n5)
let n6 = 2.7
console.log(n6)
let n7 = 16
console.log(n7)
let t = true
console.log(t)
let f = false
console.log(f)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Danyil'
let middleName = 'Borysovich'
let lastName = 'Hlynianyi'
let person = `Name: ${firstName} ${middleName} ${lastName}`
console.log(person)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a)
let b = '100';
console.log(typeof b)
let c1 = true;
console.log(typeof c1)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// Запитати користувача про інформацію за допомогою промта
const firstName1 = prompt("Enter your first name:");
const middleName1 = prompt("Enter your middle name:");
const age = +prompt("Enter your age:");

// Вивести інформацію у консоль
console.log("Name:", firstName1);
console.log("Middle name:", middleName1);
console.log("age:", age);

