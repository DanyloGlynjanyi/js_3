// --створити масив з:
//     - з 5 числових значень

function createNumericArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

console.log(createNumericArray())

// - з 5 стічкових значень
function createStringArray() {
    let stringArray = [];
    for (let i = 0; i < 5; i++) {
        stringArray.push("string" + i);
    }
    return stringArray;
}

console.log(createStringArray());

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
function createMixedArray(...args) {
    return args
}

console.log(createMixedArray(1, 2, true, "cars", false));

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
function fillArray() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array[i] = arguments[i];
    }
    return array;
}

console.log(fillArray(`value`, true, false, "papa", 11, 3, Symbol(1), 1, false, 4));

// function fillArray(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10) {
//     let array = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10];
//     return array;
// }
//
// console.log(fillArray("value", true, false, "papa", 11, 3, Symbol(1), 1, false, 4));

//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let numberArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

//// 1. перебрати його циклом while
console.log("----------------1------------------")

function callNumArr(numberArr) {
    let y = 0
    while (y < numberArr.length) {
        console.log(numberArr[y])
        y++
    }
}

callNumArr(numberArr)

//     2. перебрати його циклом for
console.log("------------------2----------------")
function callNumArr2(numberArr){
for (let i = 0; i < numberArr.length; i++) {
    const numberArrElement = numberArr[i];

    console.log(numberArrElement)

}}
callNumArr(numberArr)
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("-----------------3-----------------")
function callNum(numberArr){let x = 1;
    while (x < numberArr.length) {
        if (x % 2 !== 0) {
            console.log(numberArr[x]);
        }
        x++;
    }}
callNum(numberArr)

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("----------------4-------------------")
function callNumAr(numberArr){for (let i = 0; i < numberArr.length; i++) {
    if (i % 2 !== 0) {
        console.log(numberArr[i]);
    }
}}

callNumArr(numberArr)
function callNum1(numberArr, check) {
    for (let i = 0; i < numberArr.length; i++) {
        if ((check && i % 2 !== 0) || (!check && i % 2 === 0)) {
            console.log(numberArr[i]);
        }
    }
}

console.log("-------- Непарні індекси --------");
callNum1(numberArr, true);

console.log("-------- Парні індекси --------");
callNum1(numberArr, false);
у// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор