"use strict";

// touchstart
// touchmove
// touchend
// touchenter - когда палец зешел на элемент
// touchleave - когда пален покинул элемент
// touchcancel - палец покинул экран

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        console.log('start');
        console.log(e.touches); // Все пальцы на экране
        console.log(e.targetTouches); // Пальцы на этом элементе
        console.log(e.changedTouches); // Пальцы которые совершили конкетное действие
    });
    box.addEventListener('touchmove', (e) =>{
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    // box.addEventListener('touchend', (e) =>{
    //     e.preventDefault();
    //     console.log('end');
    // });
});