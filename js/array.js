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