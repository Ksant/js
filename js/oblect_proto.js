const solder = {
    health: 100,
    armour: 10
};

const john = {
    health: 100
};

//// Устаревший формат наследования. 
john.__proto__=solder;
console.log(john.armour);
// 10

//// Новые способы Object.setPrototypeOf
const waiter = {
    speed: 100,
    smiling: 10
};

const mike = {
    smiling: 12
};
Object.setPrototypeOf(mike, waiter);
console.log(mike.speed);
// 100

//// Object.create
const liker = Object.create(waiter);
console.log(liker.speed);
// 100