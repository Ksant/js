"use strict";

// Rest оператор ... .Не знаем сколько аргументов может быть в функции. 
const log = function(a,b, ...rest) {
    console.log(a,b,rest);
};

log('first','second', 'third', 'forth');
// basic rest [ 'operator', 'usage' ]