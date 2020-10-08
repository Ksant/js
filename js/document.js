"use strict";

const wrapper = document.querySelector('.wrapper');
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');

hearts.forEach(item =>{
    item.style.Color = 'green';
});

const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
//const text = document.createTextNode('тут был я');

div.classList.add('black');
div2.classList.add('black');
div3.classList.add('black');
// document.body.append(div);
 wrapper.append(div);
 wrapper.append(div2);
 wrapper.append(div3);
// wrapper.prepend(div);
// hearts[1].before(div);
// hearts[2].remove();
// hearts[1].replaceWith(circles[0]);

// Вставляем HTML внутри блока
div.innerHTML = "<h1>Заголовок</h1>";
// В целях безопасности текст от пользователя можно вставлять только в следующий тег.
div2.textContent = "<h1>только текст</h1>";
// Вставляем HTML код в разные части блока
div3.insertAdjacentHTML('beforebegin','<h5>beforebegin</h5>');
div3.insertAdjacentHTML('afterbegin',' <h5>afterbegin</h5>');
div3.insertAdjacentHTML('beforeend','<h5>beforeend</h5>');
div3.insertAdjacentHTML('afterend','<h5>afterend</h5>');


//// Перемещение по дом дереву
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);
//console.log(document.body.lastChild);
//console.log(document.body.lastElementChild);

// Получаем конкретный элемент и родитель его родителя.
// console.log(document.querySelector('#current').parentNode.parentNode);

// Получаем дата атрибут и следующий за ним элемент
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// Выводим только подчиненные элементы, пропуская узлы
// for (let node of document.body.childNodes) {
//     if (node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }