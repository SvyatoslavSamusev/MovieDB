
"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: () => {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: () => {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '')

         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');

         } else {
            console.log('Error');
            i--;
         }
      }
   },
   detectPersonalLevel: () => {
      if (personalMovieDB.count < 10) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count <= 30) {
         console.log('Вы классический зритель');
      } else {
         console.log('Вы киноман');
      }
   },
   showMyDB: () => {
      if (personalMovieDB.privat == false) {

         console.log(personalMovieDB);
      }
   },
   writeYourGenres: () => {
      for (let i = 1; i <= 3; i++) {
         const genres = prompt(`Введите ваш любимый жанр под номером ${i}`).toLowerCase()
         if (genres != null && genres != '') {
            personalMovieDB.genres[i - 1] = genres

         } else {
            console.log('error');
            i--;
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      })
   },
   toogleMyVisibleDB: () => {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false
      } else {
         personalMovieDB.privat = true
      }
   },
   complete: function () {
      personalMovieDB.start();
      personalMovieDB.rememberMyFilms();
      personalMovieDB.detectPersonalLevel();
      personalMovieDB.writeYourGenres();
   }

};