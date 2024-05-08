// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    return a + b
}

console.log(calc(10, 20))
console.log(calc(2, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r) {
    return Math.PI * r * r
}

console.log(radius(6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function hr(h, r) {
    return 2 * Math.PI * r * (r + h)
}

console.log(hr(9, 5))
console.log(hr(7, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrLog(arr) {
    for (const item of arr) {
        console.log('Item:', item)

    }
}

arrLog([1233, true, "aaaa"])
arrLog([false, 33])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function creatorP(someText) {
    document.write(`<p>${someText}<p/>`)
}

creatorP('hello')
creatorP('world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function creatorLi(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// creatorLi("some text 1")
// creatorLi("some text 2")
// creatorLi("some text 3")

function creatorUl(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

creatorUl("some text ")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function creatorUl2(text, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)

}


creatorUl2('some text', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrCreator(arr) {
    document.write(`<ul>`)

    for (const item of arr) {
        document.write(`<li>${item}</li>`)


    }
    document.write(`</ul>`)

}

arrCreator([true, "blablabal", 222])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'serhiy', age: 77},
    {id: 2, name: 'alex', age: 35},
    {id: 3, name: 'kolya', age: 27},
    {id: 4, name: 'max', age: 789},
];

function user(arr) {
    for (const user of arr) {
        document.write(`
            <div>
            <hr/>
                <p>id: ${user.id}</p>
                <p>name: ${user.name}</p>
                <p>age: ${user.age}</p>
                <hr/>
            </div>
        `);
    }

}
user(users)

// - створити функцію яка повертає найменьше число з масиву
function reverse(arrNums){
    let min = arrNums[0];
    for (let i = 1; i < arrNums.length; i++) {
        if (arrNums[i] < min) {
            min = arrNums[i];
        }
    }
    return min;
}

console.log('minNumber:', reverse([32, -1, 2, 31, -32, 555, 1212, 345]))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function add(arrNums) {
    let result = 0;
    for (let i = 0; i < arrNums.length; i++) {
        result += arrNums[i];
    }
    return result;
}

console.log('sum : ', add([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sum, currencies, resultCurrency) {
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`
        }
    }
    return 'Wrong currency!!!'
}

const currencies = [
    {currency: 'USD', value: 40},
]
const result = exchange(10000, currencies, 'USD')
console.log('result : ', result)