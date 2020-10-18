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

// --- Функции конструкторы
const User = function(name, id){
    this.name = name,
    this.id = id,
    this.human = true;
    this.exit = function (){
        console.log(`user ${this.name} is exit`);
    };
};

User.prototype.hello = function() {
    console.log(`Hello ${this.name}`);
};

const Freid = new User('Fried',1);
const Dan = new User('Dan', 2);

Freid.hello();
Dan.exit();