"use strict";

// Литеральная запись - /n/ 
// - Не меняется во время выполнения.
// Запись через конструктор -  new RegExp(`n`) 
// - можно конструировать выражение во время выполнения (foreach...)

const btn = document.querySelector('#regex_btn');
const enter = document.querySelector('#input');
const regInput = document.querySelector('#regex');
const searchRes = document.querySelector('#search_res');
const matchRes = document.querySelector('#match_res');
const replaceRes = document.querySelector('#replace_res');

const res = document.querySelector('#i_res');

enter.value = 'Тестовая строка с цифрами 34678 и знаками ,.!.\|';
regInput.value = 'c';

btn.addEventListener('click', () => {
    let eValue = enter.value;

    let reg = new RegExp(`${regInput.value}`);
    searchRes.innerHTML = eValue.search(reg);

    //reg = new RegExp(`${regInput.value}`, 'g');
    const matchR = eValue.match(reg);
    matchRes.innerHTML = matchR;
    console.log(matchR);

    // replace
    replaceRes.innerHTML = eValue.replace(/./g, "*");

    // Находим все числа.
    const lNums = document.createElement('label');
    lNums.textContent = 'Находим все числа в поисковой строке';
    res.append(lNums);
    const rNums = document.createElement('div');
    reg = /\d+/;
    console.log(eValue.match(reg));
    rNums.textContent = eValue.match(reg);
    res.append(rNums);
});

// search - номер первого вхождения
// match - массив с номером перовго вхождения, входным и выходным результатом
// - с флагом глобальности g мы можем найти все результаты вхождения (буквы n например) в виде массива.

