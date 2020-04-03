'use strict';
/* // Переменная, имя не должно начинаться с цифры
var leftBorderWidth = 1;
//Переменные, ускоряют работу
let second = 2;
const pi = 3.14;

var number = 5;
var string = "hello";
var sym = Symbol();
var boolean = true;

null;
var obj = {};

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name);
console.log(person["name"]);

let arr = ['plum.ng', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

// string + number = string, string + boolean = string, empty string + number = string.

// to Number
console.log(typeof(Number('5')));
console.log(typeof(5 + +'5'));
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("Hello?", '');

alert("Hello World");

// let answer = confirm("Are you here?");

let answer = prompt("Are you 18?", "Yes");

console.log(typeof(answer));
let incr = 10,
    decr = 10;

incr++;
decr--;

// равенство ==, равенство типа ===, присваивание =, И &&, ИЛИ ||, отрицание !

// Условия

let num = 50;

if (num == 50) {
    console.log("Верно!");
} else if (num < 50) {
    console.log("Меньше");
} else {
    console.log("Больше")
}

(num == 50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
    case num < 49:
        console.log("Неверно");
        break; // break - останавливает выполнение условии.
    case num > 100:
        console.log("Mnogo");
        break;
    case num > 80:
        console.log("Ewe mnogo");
        break;
    case 50: // определенное значение всегда без знаков равенств ==
        console.log("50");
        break;
    default:
        console.log("Something is wrong");
        break;
}
*/






/*

let money = prompt("Бюджет на месяц?", "100"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let month_expenses = prompt("Статья расходов",""),
    how_much = prompt("Во скок обойдется", "");

let expenses = {
    month_expenses: how_much
};



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

console.log(appData);

let day1 = money / 30;

alert(day1);




let G = 1;










*/







/*

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

// for (начало, условие, действие)
for (let i = 1; i <= 8; i++) {

    if (i == 6) {
        continue;
    }
    console.log(i);
}
alert( "1"[0] );
*/


function calc(a,b) {
    return (a + b);
}

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

let cal = (a, b) => a+b

let str = "test";

//let lengthStr = str.length;
console.log(str);