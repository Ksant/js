"use strict";

// Можно добавлять скрипты отсюда.
// Такие скрипты загружаются как sync
// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = "false";
// document.body.append();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?","0");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?","0");
        }
    },
    toggleVisibleMyDB: function (){
        this.privat = !this.privat;
    },
    rememberMyFilms: function(){
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
            this.movies[lastMovie] = rate;
            i++;
        }
        while (i <= 3);
    },
    detectPersonalLevel: function() {
        if (this.count < 10 ){
            console.log("Посмотрено мало фильмов");
        } else if (this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошлка ошибка");
        }
    },
    showMyDB: function (){
        if (!this.privat){
            console.log(this);  
        }
    },
    writeYourGenre: function() {
        for (let i = 1; i <= 3; i++) {
            while (this.genres[i-1] == null || this.genres[i-1] == ""){
                this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,"");   
            }   
        }
        this.genres.forEach(function (value,i,arr) {
            console.log(`Любимый жанр ${i} - это ${value}`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenre();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

