"use strict";

//// Задачи для собеседований

// let x= 5;
// console.log(x);
// alert(x++);

// x = [] + false - null + true;
// console.log(x);
// [] = "", строка - false =  NaN

// let y=1; let x = y = 2; console.log(x); 
// Цепочка присваивания идет справа на лево.
// 2

// console.log([]+1+2);
// Если к строе прибавить число, то число превращается в строку.
// 12

// console.log("1"[0]);
// 1

// let x = 2 && 1 && null && 0 && undefined;
// console.log(x);
// И запинается на ЛЖИ, но вот почему лож это null?
// null

// console.log(!!(1 && 2) === (1 && 2));
// !! превращает следующиее за ними выражение в boolean
// false

console.log(null || 2 && 3 || 4);
console.log(2 && 3);
// 3
console.log(3 && 2);
// 2
console.log(2 || 3);
// 2
console.log(3 || 2);
// 3
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

console.log(+"Infinity");
// Infinity
console.log(+"infinity");
// NaN

console.log("Ежик" > "Яблоко");
// false

let x = 0 || "" || 2 || undefined || true || false;
console.log(x);