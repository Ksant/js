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



//// 3.1 to boolean
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