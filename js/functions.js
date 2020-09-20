"use strict";

// Декларативная функция
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Сообщение функции');

// Expression
let calc = function (a,b) {
    return a + b;
};

console.log(calc(1,3));


// Стрелочная функция
let calc2 = (a,b) => a+b;
console.log(calc2(1,4));