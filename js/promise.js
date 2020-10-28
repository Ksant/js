"use strict";

// Выполняем 3 асинхронные операции при помощик колбеков
// Запрос данных
// Подготовка данных (создали объект)
// Установка объекту статуса "ordered"
console.log('Запрос данных ...');

setTimeout(() => {
    console.log('Подготовка данных...');
    
    const product = {
        name: 'TV',
        price: '100'
    };

    setTimeout(() => {
        product.starus = 'ordered';
        console.log(product);
    }, 2000);
}, 2000);



// --- promise
// Используется для гарантии последовательно обработки асинхронных действий 
// + перехват ошибки
// + finally
// + более удобная запись, чем при помощи чистых callback
console.log('Запрос данных ...');
const req = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');
        
        const product = {
            name: 'TV',
            price: '100'
        };
        if (product.price > 100) {
            resolve(product);
        } else {
            reject();
        }
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            product.starus = 'ordered';
            resolve(product);
        }, 2000);
    });
}).then( data => { 
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(()=> {
    console.error('Упс. Ошибочка!');
}).finally(() => {
    console.log('finally выплняется полюбому.');
});


// --- Promise all - ждет выполнения всех промисов и только потом "then"
// --- Promise race - ждет выполнения первого промиса и сразу выполняет "then"
const test = time => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000),test(2000)]).then (() => {
    console.log('All');
});

Promise.race([test(1000),test(2000)]).then (() => {
    console.log('Race');
});