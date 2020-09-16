"use strict";

let num = 10.1;

console.log(num);

let name = 'this is sting';

console.log(name);

let undef;

console.log(undef);

let nl = null;

console.log(nl);

let arr = [1,2,'string',null];

console.log(arr);
console.log(arr[0]);

let obj = {
    name: "Ksant",
    age: '42',
    mf: 'male'
};

console.log(obj);

//// alert, confirm, prompt, document.write
// alert("ups");
// let result = confirm("А вы уверены в ups?");
// console.log(result);
// let result = prompt("Напишите что нибудь пожалуйтса","сюда");
// console.log(result);
// document.write(result);

//// Интерполяция.
//alert(`Польователь. Имя: ${obj.name}, Возраст ${obj.age}, Пол ${obj.mf}. ` );

//// Операторы
let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);
// Остаток от деления.
console.log(10%4);
// Сравнение по типу данных
console.log(2*4 === 8);
console.log(2*4 === '8');
