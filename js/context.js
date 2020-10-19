"use strict";

//--- 1 Вызов через функцию. 
// В браузере обычная функция: this = window, но если use strict - undefined
function showThis(){
    console.log(this);
}
showThis();

// Задание
function showThis2(a,b){
    function sum(){
        console.log(this);
        return this.a + this.b;
    }

    console.log(sum());
}
showThis2(4,5);
// Браузере будет undefined, undefined так как контест будет ведзед одинаковый - this = undefined



// --- 2 Вызов через объект.
// Контекст вызова всегда ссылается на сам объект.
// Если внутри фукнции объекта создать функцию, то внутри этой функции контекст будет свой - см. случай 1.
const obj = {
    a:20,
    b:15,
    sum: function(){
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();
// { a: 20, b: 15, sum: [Function: sum] }
// global


// --- 3. this в конструкторах и классах это новый экземпляр объекта.
const User = function(name, id){
    this.name = name,
    this.id = id,
    this.human = true;
    this.exit = function (){
        console.log(`user ${this.name} is exit`);
    };
};
let Ksant = new User('Ksant', 3);


// --- 4. Функция приобретает свой контекст при вызове call, apply, bind

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Jhon'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));


// --- Пример
// Функция написана в классическо режиме. this - event.target
const btn = document.querySelector('btn');
btn.addEventListener('click', function() {
    console.log(this);
});
// <button></button>

// Функция написана через стрелочный тип. У стрелочной функции нет своего контекста.
const btn2 = document.querySelector('btn');
btn.addEventListener('click', (e) => {
    console.log(this);
});
// undifined