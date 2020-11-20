'use strict';

const btn = document.querySelector('.btn_start'),
      btnCancel = document.querySelector('.btn_cancel'),
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

btn.addEventListener('click', () => {
    id = requestAnimationFrame(myAnimation);
    console.log(id);
});



btnCancel.addEventListener('click', () => {
    console.log(id);
    cancelAnimationFrame(id);
});
//cancelAnimationFrame(id);