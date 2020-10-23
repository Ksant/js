'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444444'
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));