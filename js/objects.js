"use strict";

const obj = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'blue',
        bg: 'gray'
    },
    makeTest: function() {
        console.log('Печать данных из функции объекта');
    }
};

console.log(obj.name);

// Можно удалить свойство из объкта
// delete obj.name;

// Можно перебрать свойства объекта при помощи цикла for in
let counter = 0;
for (const key in obj) {
    if (typeof(obj[key]) === 'object'){
        for (const i in obj[key]) {
            console.log(`Свойство ${i} = ${obj[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} = ${obj[key]}`);
        counter++;
    }
}

console.log(`Количество свойств объекта полученных при помощи счетчика - ${counter}`);

console.log(`Количество свойств объекта полученных при помощи свойства keys - ${Object.keys(obj).length}`);

obj.makeTest();

//// Деструктуризация объекта
const {border, bg} = obj.colors;
console.log(`Переменная border со значением  ${border} полученнная деструктуризацией объекта`);



//// Копирование объекта
const objC = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};

// Поверхностное копирование объекта.
function copy(mainObj){
    let objCopy = {};
    for (let key in mainObj) {
        if (mainObj.hasOwnProperty(key)) {
            objCopy[key] = mainObj[key];
        }
    }
    return objCopy;
}

const newObj = copy(objC);
newObj.a = 20;
newObj.c.x = 70;
console.log(objC);
console.log(newObj);

//---------------------------------------------
//// Object.assign. Слияние объектов. Создается независимая поверхностная копия объекта.
const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};

const numbers2 = {
    d: 12,
    e: 17
};

console.log(Object.assign(numbers, numbers2));
//{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 12, e: 17 }

// Так как создается поверхностая копия, то так можно клонировать объекты
const clone = Object.assign({}, numbers);
clone.a = 20;
console.log(numbers);
console.log(clone);
// { a: 2, b: 5, c: { x: 7, y: 4 }, d: 12, e: 17 }
// { a: 20, b: 5, c: { x: 7, y: 4 }, d: 12, e: 17 }


// ---------
// Частный случай - копирование массива.
const oldArray = [1,2,3];
const newArray = oldArray.slice();
newArray[1] = "упс";
console.log(oldArray);
console.log(newArray);
//[ 1, 2, 3 ]
//[ 1, 'упс', 3 ]


// Копия новым способом ES6. Используем оператор разворота ...
// Простой вариант
const numbers4 = ["a","b"];
const numbers4Clone = [... numbers4];

// Варинат с несколькими массивами.
const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress','livejournal','blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet.join("."));
//youtube.vimeo.rutube.wordpress.livejournal.blogger.vk.facebook

// Пример2 использования оператора разворота 
function log (a,b,c){
    console.log(`${a} . ${b} . ${c}`);
}
const numbers3 = [1,2,6];
log(...numbers3);
// 1 . 2 . 6


// Копирование объектов
const obj2 = {
    a: "a",
    b: "b"
};

const obj2Clone = {...obj2};


// --- Глубокое клонирование объектов.
// Делается при помощи JSON

const person = {
    name:'Alex',
    tel:'+744444444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const deepClone = JSON.parse(JSON.stringify(person));
deepClone.parents.mom = 'Toma';

console.log(person);
console.log(deepClone);
