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
// let i = 0;
// const f1 = (e) => {
//     i++;
//     console.log(e.currentTarget);
//     e.target.innerHTML = i;
//     if (i > 3) {
//         btn.removeEventListener('click', f1);
//     } 
// };

// btn.addEventListener('click', f1);
// overlay.addEventListener('click', f1, {once: true});


//// Отмена стандартного поведения элемента
// const link = document.querySelector('a');
// link.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(e.target);
// });

//// Ждем загрузку всего дом дерева.
document.addEventListener('DOMContentLoaded', () => {
    //// ------- Делегирование событий.
    const over = document.querySelector('div.overlay');
    // Делегируем события кнопке внутри. Причем только кнопке с классом "blue"
    over.addEventListener('click', (e) => {
        //if(e.target && e.target.classList.contains('blue')) {
        if(e.target && e.target.matches('button.blue')) {
            console.log('hello');
        }
    });
    // Создадим еще одну кнопку с классом blue и к ней будет подключен обработчик события.
    const btn6 = document.createElement('button');
    btn6.classList.add('blue');
    btn6.innerText=6;
    over.append(btn6);

    const timerId = setTimeout ( function  () {
        const btnx = document.createElement('button');
        btnx.classList.add('blue');
        btnx.innerText='x';
        over.append(btnx);
        console.log('hello over 3 sec');
    }, 3000);

    function addBtn () {
        const btny = document.createElement('button');
        btny.classList.add('blue');
        btny.innerText='y';
        over.append(btny);
        console.log('hello over 5 sec');
    }
    
    const timerId2 = setTimeout (addBtn, 5000);
    

    // Добавляем сердечки по интервалу. 
    // Интервал запускаем по клику на wrapper.
    // Останавливается, после создания 5 сердечек. 
    const wrapper = document.querySelector('.wrapper');
    let timerHeart;
    let i = 0;
    function addHeart () {
        if (i == 4) {
            clearInterval(timerHeart);
        }
        let heart = document.createElement('div');
        heart.classList.add('heart');
        wrapper.append(heart);
        i++;
    }

    wrapper.addEventListener('click', () => {
        timerHeart = setInterval(addHeart, 1000);
    });

    //// Если нужно, чтобы setTimeout запускался строго после окончания выполнения функции
    // let id = setTimeout(function log(){
    //     console.log('Hello');
    //     id = setTimeout(log, 500);
    // }, 500);


    let box = document.querySelector('#box');
    let pos = 0;
    function moveBox () {

        const  timerMove = setInterval(move, 10);

        function move () {
            if (pos > 500){
                clearInterval(timerMove);
            } else {
                pos++;
                box.style.width = pos+'px';
            }
        }
    }

    box.addEventListener('click', moveBox);


});


