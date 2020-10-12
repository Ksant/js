"use strict";


//// 1.1 typeof . Приводим типы к строке
console.log(typeof(null));
console.log(typeof(String(null)));
console.log(typeof(String(null)));
// object
// string
// string

//// 1.2 При сложении со строкой, всегда получается строка.
console.log(typeof(null));
console.log(typeof(null + ''));
// object
// string


//// Пример. Чисто автомато преобразуется в строку.
const num = 5;
console.log("https://vk.com/catalog/"+num);
const fontSize = 26 + "px";



//// 2.1 To number.
console.log(typeof(Number("4")));
// number

//// 2.2 Унарный плюс
console.log(typeof(+"4"));
// number



//// ----------- 3.1 to boolean  -----------
// false - 0, '', null, undefined. NaN Все остальное - true

let switcher = null;
if (switcher) {
    console.log('Not working ...');
}
switcher = 1;
if (switcher) {
    console.log('Working ...');
}
// Working ...


//// 3.2 to Boolean
console.log(typeof(Boolean("4")));
// boolean

//// 3.3 to !!
console.log(typeof(!!"4444"));
// boolean


//// ----------- Даты -------------------------------------
const now = new Date();
console.log(now);
const d1 = new Date('2005-05-01');
//другой вариант - new Date.parse('2005-05-01');
console.log(d1);
//// При формировании даты на основе чисел, учитываются часовые пояса
const d2 = new Date(2020,5,2,20);
console.log(d2);
//// Милисекунды с начала 1970 года. Чтобы получить даты до 70 года записывем отрицательные цифры.
const d3 = new Date(0);
console.log(d3);
//1970-01-01T00:00:00.000Z

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); // Получить день недели (начиная с воскресенья)
console.log(now.getHours());
now.setHours(10);
console.log(now.getHours());