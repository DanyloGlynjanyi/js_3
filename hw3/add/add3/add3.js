// --створити масив з:
//     - з 5 числових значень
// - та вивести його в консоль

const numArr = [1, 213123, 32131, 4444, 5555]
console.log(numArr)

// - з 5 стічкових значень

const strArr = ['asdasd', 'dasdasd', 'awawawd', 'dasdw', '2dasdwqqq1']
console.log(strArr)

// - з 5 значень стрічкового, числового та булевого типу

const arrW = [12, 111, '111aw2das11d', true, "asdasd11"]
console.log(arrW)

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let myArray = [42, "Hello", true, {name: "John", age: 30}, ["apple", "banana", "orange"]];

console.log(myArray[4]);

//
//// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numberArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//// 1. перебрати його циклом while
console.log("----------------1------------------")
let y = 0
while (y < numberArr.length) {
    console.log(numberArr[y])
    y++
}

//     2. перебрати його циклом for
console.log("------------------2----------------")
for (let i = 0; i < numberArr.length; i++) {
    const numberArrElement = numberArr[i];

    console.log(numberArrElement)

}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("-----------------3-----------------")
let x = 1;
while (x < numberArr.length) {
    if (x % 2 !== 0) {
        console.log(numberArr[x]);
    }
    x++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("----------------4-------------------")
for (let i = 0; i < numberArr.length; i++) {
    if (i % 2 !== 0) {
        console.log(numberArr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log("---------------5--------------------")
let a = 0;
while (a < numberArr.length) {
    if (a % 2 == 0) {
        console.log(numberArr[a]);
    }
    a++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("---------------6--------------------")
for (let i = 0; i < numberArr.length; i++) {
    if (i % 2 == 0) {
        console.log(numberArr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log("---------------7--------------------")

for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 3 === 0) {
        numberArr[i] = "okten";
    }
}

console.log(numberArr);
// 8. вивести масив в зворотньому порядку.
console.log("----------------8------------------")

let w = numberArr.length - 1;
while (w >= 0) {
    console.log(numberArr[w]);
    w--;
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log("----------------9------------------")
//
for (let i = numberArr.length - 1; i >= 0; i--) {
    const numberArrElem = numberArr[i];
    console.log(numberArrElem);
}
console.log("----------------10-----------------")
for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}

console.log("---------------11------------------")
for (let i = strArr.length - 1; i >= 0; i--) {
    console.log(strArr[i])
}
console.log("----------------12-----------------")
for (let i = arrW.length - 1; i >= 0; i--) {
    console.log(arrW[i])

}
console.log("----------------13-----------------")
for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}
console.log("----------------14-----------------")
let q = numberArr.length - 1
while (q >= 0) {
    console.log(numberArr[q])
    q--
}

console.log("----------------15-----------------")
for (let i = numberArr.length - 1; i >= 0; i--) {
    const numberArrElement = numberArr[i];

    console.log(numberArrElement)

}

console.log("-----------------16----------------")
let t = numberArr.length - 1;
while (t >= 0) {
    if (t % 2 !== 0) {
        console.log(numberArr[t]);
    }
    t--;
}

console.log("---------------17------------------")
let s = numberArr.length - 1;
while (s >= 0) {
    if (s % 2 == 0) {
        console.log(numberArr[s]);
    }
    s--;
}
console.log("---------------18------------------")
for (let i = numberArr.length - 1; i >= 0; i--) {
    console.log(numberArr[i])
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log("---------------19------------------")

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i])

}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log("---------------20------------------")

const stringArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i]);

}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log("---------------21------------------")

const mixedArr = [1, "two", true, {name: "John"}, [5, 6], null, undefined, NaN, function () {
    console.log("Hello")
}, Symbol("foo")];

for (const element of mixedArr) {
    console.log(element);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("---------------21------------------")
const mixedArray = [1, "two", true, 4, "five", false, 7, "eight", 9, true];
for (const i of mixedArray) {
    if (typeof i === "boolean") {
        console.log(i);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("---------------22------------------")

for (const item of mixedArray) {
    if (typeof item === "number") {
        console.log(item);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("---------------23------------------")

for (const value of mixedArray) {
    if (typeof value === "string") {
        console.log(value);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log("---------------24------------------")

const emptyArr = [];
emptyArr[0] = 1;
emptyArr[1] = 'two'
emptyArr[2] = true
emptyArr[3] = null
emptyArr[4] = undefined
emptyArr[5] = 123
emptyArr[6] = "asdas"
emptyArr[7] = true
emptyArr[8] = 111
emptyArr[9] = 1222
for (const emptyArrElement of emptyArr) {
    console.log(emptyArrElement)
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("---------------25------------------")

for (let i = 1; i <= 10; i++) {
    console.log(`Step: ${i}`);
    document.write(`Step: ${i}<br>`);
}
document.write(`<hr/>`)
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(`Step: ${i}`);
    document.write(`Step: ${i}<hr/>`);
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i += 2) {
//     console.log(`Step: ${i}`);
//     document.write(`Step: ${i}<hr>`);
// }
// document.write(`<hr/>`)

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`Num:${i} <hr/>`); // Вивести парні кроки на сторінку
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`Num:${i} <hr/>`); // Вивести парні кроки на сторінку
    }
}
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "avada kedavra",
        pageCount: 300,
        authors: ["lord volendemort"],
        genres: ["salut", "papa", "pedro"]
    },
    {
        title: "фух чо так тяжко",
        pageCount: 10000000000000000000000000000000000000000000000000000000000000000,
        authors: ["життя"],
        genres: ["Жанр 2", "Жанр 3"]
    },
    {
        title: "Петро Марійчин",
        pageCount: 400,
        authors: ["Дзідзьо", "Автор 5"],
        genres: ["Мюзикл", "Жанр 3"]
    }
];

console.log(books);

// -знайти наібльшу книжку.
let largestBook = books[0];

for (const book of books) {
    if (book.pageCount > largestBook.pageCount) {
        largestBook = book;
    }
}

console.log(largestBook.title);


// - знайти книжку/ки з найбільшою кількістю жанрів
for (const book of books) {
    if (book.genres > largestBook.genres) {
        largestBook = book;
    }
}
console.log(largestBook.genres);

// - знайти книжку/ки з найдовшою назвою
for (const book of books) {
    if (book.title.length > largestBook.title.length) {
        largestBook = book;
    }
}
console.log(largestBook.title);

// - знайти книжку/ки які писали 2 автори
for (const book of books) {
    if (book.authors !== 2) {
        largestBook = book;
    }
}
console.log(largestBook.authors);

// - знайти книжку/ки які писав 1 автор
for (let i = 0; i < largestBook.authors.length; i++) {
    const largestBookElement = largestBook.authors[i];
    console.log(largestBookElement);
}
та