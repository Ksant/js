//// Условия.
//if
const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('ок!');
}

// Тернарный оператор
const ntm = 50;
(ntm === 50) ? console.log('ок!') : console.log('Error');

//switch
const wnm = 50;
switch (wnm) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

//// Циклы
// while
let wnum = 50;
while (wnum <= 55) {
    console.log(wnum);
    wnum++;
}

// do
let dnum = 50;
do {
    console.log(dnum);
    dnum++;
}
while (dnum <= 55);

// for 
let fnum = 50;
for (let i = 1; i < fnum; i++) {
    console.log(i);
}