"use strict";


let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","0");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","0");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 1; i <=2 ; i++) {
//     let lastMovie = "";
//     let rate = 0;
//     while (lastMovie == null || lastMovie.length == 0) {
//         lastMovie = prompt("Один из последних просмотренных фильмов?","");
//     }
//     while (rate == null || rate == 0 ) {
//         rate = +prompt("Его рейтинг?","1-10");
//     }    
//     personalMovieDB.movies[lastMovie] = rate;
// }



function rememberMyFilms(){
    let i = 1;
    do {
        let lastMovie = "";
        let rate = 0;
        while (lastMovie == null || lastMovie.length == 0) {
            lastMovie = prompt("Один из последних просмотренных фильмов?","");
        }
        while (rate == null || rate == 0 ) {
            rate = +prompt("Его рейтинг?","1-10");
        }    
        personalMovieDB.movies[lastMovie] = rate;
        i++;
    }
    while (i <= 3);
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ){
        console.log("Посмотрено мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошлка ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);  
    }
}

function writeYourGenre() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,"");      
    }
}

writeYourGenre() ;
showMyDB(personalMovieDB.privat);

