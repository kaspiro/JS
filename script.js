let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personaMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personaMovieDB);
const film1 = prompt("Последний фильм", "");
const ocenka1 = +prompt("Оценка", "");
const film2 =  prompt("Последний фильм", "");
const ocenka2 = +prompt("Оценка", "");
personaMovieDB.movie = {
    film1: film1,
    ocenka1: ocenka1,
    film2: film2,
    ocenka2: ocenka2,
};
console.log(personaMovieDB);