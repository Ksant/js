"use strict";

// -- Варианты экспорта
// 1
export let one = 1;
// 2
let two = 2;
export {two};
// 3
export function sayHi(){
    console.log('Hi');
}

// 4
export default function sayHiDef(){
    console.log('Hi ef');
}

// Проблема в том, что при этом данные файл нужно собирать при помощи WebPack

