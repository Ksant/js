"use strict";

//// 3 способа использования событий

// 1. Прямо в html коде. Используется крайне редко и лучше так не делать
// <button onclick = "alert('сообщение')">Нажми меня</button>

// 2. Свойства дом дерева
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
// btn.onclick = function(){
//     alert('click');
// };

// 3. addEventListener. Лучший вариант с несколькими плюсами.
// Можем назначать несколько действий на 1 событие.
// Можем удалять события.
let i = 0;
const f1 = (e) => {
    i++;
    console.log(e.currentTarget);
    e.target.innerHTML = i;
    if (i > 3) {
        btn.removeEventListener('click', f1);
    } 
};

btn.addEventListener('click', f1);
overlay.addEventListener('click', f1, {once: true});


//// Отмена стандартного поведения элемента
const link = document.querySelector('a');
link.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
});


//// Ждем загрузку всего дом дерева.
document.addEventListener('DOMContentLoaded', () => {
    //Весь код, который нужно выполнить.
});