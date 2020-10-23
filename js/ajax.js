"use strict";


const inputRub = document.querySelector('#rub'),
    inputRub2 = document.querySelector('#rub2'),
    inputUsd = document.querySelector('#usd'),
    res = document.querySelector('#res');



inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    console.log(inputRub);
    
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    // readystatechange отслеживает событие готовности нашего запроса в текущий момент.
    // следит за свойством readyState
    request.addEventListener('readystatechange', (e) => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
           inputUsd.value = "Что то пошло не так!"; 
        }
    });

    // status
    // statusText
    // response
    // readyState
});

inputRub2.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    console.log(inputRub);
    
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    // load срабатывает когда запрос готов
    request.addEventListener('load', (e) => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub2.value / data.current.usd).toFixed(2);
        } else {
           inputUsd.value = "Что то пошло не так!"; 
        }
    });
});