// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [
    'bmw',
    'audi',
    'simpsons',
    'asda1sd',
    'asd2asd',
    'asd3asd',
    'asdasdq',
    'asdasdw',
    'asdasdas',
    'asdas1das',
]
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const obj1 =
    {
        title: 'harry potter',
        pageCount: 1488,
        genre: 'fantasy'
    }
const obj2 =
    {
        title: 'hasadasdater',
        pageCount: 222,
        genre: 'qqqq'
    }
const obj3 =
    {
        title: 'harqwqdeqwer',
        pageCount: 1788,
        genre: 'faasdasd'
    }
console.log(obj1)
console.log(obj2)
console.log(obj3)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj4 = {
    title: 'harqwqaaadeqwer',
    pageCount: 17288,
    genre: 'faasd33asd',
    authors: [
        {name: 'asdada1', age: 5454}
    ]
};
console.log(obj4)
let obj5 = {
    title: "Harryn Pontter",
    pageCount: 5555555,
    genre: "Fantasy",
    author: [
        {name: '11Ivasadasdn', age: 173333},
    ]

}
console.log(obj5)
let obj6 = {
    title: "Harrysh Pottersh",
    pageCount: 5511155,
    genre: "Fantasy",
    author: [
        {name: 'Iqweqwe', age: 132222},
    ]
}
console.log(obj6)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'John Doe', username: 'john_doe123', password: 'password123'},
    {name: 'Jane Smith', username: 'jane_smith456', password: 'securepass'},
    {name: 'Alice Johnson', username: 'alice123', password: 'alicepass'},
    {name: 'Bob Brown', username: 'bobby', password: 'bobspassword'},
    {name: 'Emma Davis', username: 'emma_d', password: 'emmapass'},
    {name: 'Michael Wilson', username: 'mike_wilson', password: 'mikemypass'},
    {name: 'Sarah Taylor', username: 'sarah_t', password: 'sarah123'},
    {name: 'David Martinez', username: 'david_m', password: 'davidpass'},
    {name: 'Emily Anderson', username: 'emily_a', password: 'emilypass'},
    {name: 'James Jackson', username: 'jamesj', password: 'jamespass'}
];
console.log('Password:', users[0].password)
console.log('Password:', users[1].password)
console.log('Password:', users[2].password)
console.log('Password:', users[3].password)
console.log('Password:', users[4].password)
console.log('Password:', users[5].password)
console.log('Password:', users[6].password)
console.log('Password:', users[7].password)
console.log('Password:', users[8].password)
console.log('Password:', users[9].password)
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
const temperature = [
    {
        monday: [
            {morning: 18},
            {day: 22},
            {evening: 19},
        ]
    },
    {
        tuesday: [
            {morning: 14},
            {day: 15},
            {evening: 11},
        ]
    },
    {
        wednesday: [
            {morning: 20},
            {day: 21},
            {evening: 10},
        ]
    },
    {
        thursday: [
            {morning: 11},
            {day: 29},
            {evening: 18},
        ]
    },
    {
        friday: [
            {morning: 17},
            {day: 16},
            {evening: 29},
        ]
    },
    {
        saturday: [
            {morning: 13},
            {day: 22},
            {evening: 15},
        ]
    },
    {
        sunday: [
            {morning: 19},
            {day: 21},
            {evening: 10},
        ]
    }
]

console.log(temperature)
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
console.log(x)
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 15
if (time > 45 && time <= 59) {
    console.log('time:4/4')
} else if (time > 30 && time <= 45) {
    console.log('time:3/4')
} else if (time > 15 && time <= 30) {
    console.log('time:2/4')
} else if (time > 0 && time <= 15) {
    console.log('time:1/4')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day > 0 && day <= 10) {
    console.log('1 decade');
} else if (day > 10 && day <= 20) {
    console.log('2 decade');
} else if (day > 20 && day <= 31) {
    console.log('3 decade');
} else {
    console.log('?????');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let aDay = prompt('Enter day ?')
switch (aDay) {
    case 1 :
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.error('Invadid aDay');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let y = 30
let z = 30
if (y > z) {
    console.log('y: ', y);
} else if (z > y) {
    console.log('z: ', z);
} else if (z === y) {
    console.log('Рівні');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
let x1 = "";
x1 = x1 || 'default';
console.log(x1)

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}