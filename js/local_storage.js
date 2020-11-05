"use strict";

// Ограничения:
// 1. 5 Мб
// 2. Работает в пределах одного домена.

// localStorage на пальцах. https://tproger.ru/articles/localstorage/

// --- 4 команды работы с localstorage
// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number')); 
// localStorage.removeItem('number');
// localStorage.clear();


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');
console.log(localStorage.getItem('isChecked')); 
checkbox.checked = localStorage.getItem('isChecked');

checkbox.addEventListener('change', (e) => {
    localStorage.setItem('isChecked', e.target.checked);
});

if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'green';
}

change.addEventListener('click', () => {
    if(localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#FFF';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'green';
    }
});


// Для хранения своих данных в lacalstorage их нужно сериализовать.
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);