"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt("Один из последних просмотренных фильмов?","");
const rate = +prompt("Его рейтинг?","1-10");
const lastMovie2 = prompt("Один из последних просмотренных фильмов?","");
const rate2 = +prompt("Его рейтинг?","1-10");

personalMovieDB.movies[lastMovie] = rate;
personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);