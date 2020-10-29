"use strict";

let arr = [1,2,3,6,8];

// Удалить последний элемент массива
arr.pop();
// Добавить элемент в конец массива
arr.push(10);
console.log(arr);

//// Есть методы, которые делают то же самое с первым элементом массива
// Используются редко т.к. если удалить или добавить элемент вначале, то сдвинутся индексы
// всех последующих элементов.
//arr.shift();
//arr.unshift(-1);
//console.log(arr);


//// Перебор массивов
let arrFor = [1,2,3,6,8];
for (let i = 0; i < arrFor.length; i++) {
    console.log(arrFor[i]);    
}

// for of работате только с массивами. С объектами не работает.
console.log("For of цикл");
for (const value of arrFor) {
    console.log(value);
}

//// Особенности свойтва length
// Длинна всегда равна индексу последнего элемента + 1.
const arrLen = [1,2,3,4,5];
// Если добавить в конкретный индекс - значение, то все пропущенные ячеки будут пропущены. 
// Так делать ненадо.
arrLen[100] = 100;
console.log(arrLen.length);
console.log(arrLen);
//101
//[ 1, 2, 3, 4, 5, <95 empty items>, 100 ]


//// foreach
// Один минус - нельзя использовать break и continue
const arrForeach = [1,2,3];
arrForeach.forEach(element => {
    console.log(element);
});

arrForeach.forEach(function (element, i, arr) {
    console.log(`${i}: ${element} внутри массива ${arr}`);
});


//// split - преобразуем строку в массив
const str = "ботинки, ясли, чебуреки, штуки, хрени, пылесосы, квадраты, курги";
let products = str.split(",");
products.forEach(element => {
    console.log(element); 
});

//// join Преобразуес массив строку
console.log(products.join(";"));


//// Sort. Сортирует все как строки (и цифры тоже как строки)
products.sort();
console.log(products.join(";"));
// Но мы можем настроить сортировку (в SORT используется алгоритм быстрой сортировки)
const arrSortNum = [12,4,21,4,64,7];
function compareNum(a,b) {
    return a - b;
}
arrSortNum.sort(compareNum);
console.log(arrSortNum.join(";"));



function createUl(div, text) {
    const newDiv = document.createElement('div');
    div.before(newDiv);

    newDiv.append(document.createElement('h3').innerText = text);
    const arrUl = document.createElement('ul');
    newDiv.append(arrUl);
    return arrUl;
} 

function createLi(arr, ul){
    arr.forEach((val) =>{
        const newLi = document.createElement('li');
        newLi.innerText = val;
        ul.append(newLi); 
    });
}

function arrToStr(arr, el, text){
    const div = document.createElement('div');
    el.before(div);
    div.append(document.createElement('h3').innerText = text);
    const str = arr.reduce((sum, current) => sum + ', ' +current);
    const newDiv = document.createElement('div');
    newDiv.innerText = str;
    el.before(newDiv);
}

function AddElem(el, text, elem){
    const newEl = document.createElement(elem);
    newEl.innerText = text;
    el.before(newEl);
}

// --- Создаем список при помощи массива и foreach
const names = ['Ivan','Ann','KsEnia','VoldemarT', 'bag'];
const arrDiv = document.querySelector('.array');

arrToStr(names, arrDiv, "Простой массив");

// ---- filters
const shortName = names.filter((name) => {
    return name.length<5;
});
AddElem(arrDiv, "filters", 'H2');
arrToStr(shortName, arrDiv,  "Массив с фильтацией (длина имени меньше 5ти)");

// ---- map
const normalNames = names.map(item => item.toLocaleLowerCase());
AddElem(arrDiv, "map", 'H2');
arrToStr(normalNames, arrDiv,  "Преобразование к нижнему регистру");

// ---- some Если хотя бы 1 элемент массива удовлетворяет условию - true
let text = `Если хотя бы 1 элемент массива удовлетворяет условию - true.
    Проверяем есть ли в массиве хоть 1 число.`;
AddElem(arrDiv, "Some", 'H2');
AddElem(arrDiv, text, 'H4');
names.push(4);
arrToStr(names, arrDiv,  "");
const resSome = names.some(item => typeof(item) === 'number');
AddElem(arrDiv, resSome, 'p');


// ---- Every Если все элементы массива удовлетворяет условию - true
text = `Если все элементы массива удовлетворяет условию - true.
    Проверяем все ли элементы массива числа?.`;
AddElem(arrDiv, "Every", 'H2');
AddElem(arrDiv, text, 'H4');
arrToStr(names, arrDiv,  "");
const resEvery = names.every(item => typeof(item) === 'number');
AddElem(arrDiv, resEvery, 'p');

// ---- Reduce
text = 'Reduce';
AddElem(arrDiv, text, 'H2');
text = 'Собираем вcе числа массива';
AddElem(arrDiv, text, 'H4');
const arrReduce = [7,5,13];
arrToStr(arrReduce, arrDiv,  "");
const arrReduceRes = arrReduce.reduce((sum, current) =>  sum + current);
AddElem(arrDiv, arrReduceRes, 'p');


