/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Так делал я */

"use strict";

/* 1) */
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

/* 2) */
const personalMovieDB = {
    count: typeof(numberOfFilms),
    movies: null,
    actors: null,
    genres: [],
    privat: false,
};

/* 3) */
const answers = [];

answers[0] = prompt('Один из последних просмотренных фильмов?','Джеки Чан');
answers[1] = prompt('На сколько оцените его?','5');
answers[2] = prompt('Один из последних просмотренных фильмов?','Джеки Чан');
answers[3] = prompt('На сколько оцените его?','5');

personalMovieDB.movies [1] = [2];
personalMovieDB.movies [3] = [4];

console.log(personalMovieDB);

/* Теперь повторяю за лекцией */
/* + перед prompt добавил, чтобы ответ был числом */
/* Пустой объект помещается в {} */

/* 1) */
const numberOfFilms1 = +prompt("Сколько фильмов вы уже посмотрели?", "");

/* 2) */
const personalMovieDB1 = {
    count: numberOfFilms1,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* 3) */
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB1.movies[a] = b;
personalMovieDB1.movies[c] = d;

console.log(personalMovieDB1);
