"use strict";


let numberOfFilms = 0;
while (numberOfFilms == 0) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","0");
}

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

if (personalMovieDB.count < 10 ){
    console.log("Посмотрено мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошлка ошибка");
}

console.log(personalMovieDB);


