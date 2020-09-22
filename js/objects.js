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

// Деструктуризация объекта
const {border, bg} = obj.colors;
console.log(`Переменная border со значением  ${border} полученнная деструктуризацией объекта`);