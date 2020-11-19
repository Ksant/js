'use strict';

// формируем генератор вручную.
function* generator(){
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

// Формируем генератор циклом
function* count(n){
    for(let i=0; i < n; i++){
        yield i;
    }
}

for (let k of count(7)){
    console.log(k);
}