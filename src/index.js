import { fetchWithTimeout } from "./services";
import { fetchMovies } from "./services";
import { fetchBooks } from "./services";

let movies = require ("./data/movies.json")

function getBooksAndMovies(){
    return Promise.all([fetchBooks(),fetchMovies()]).then(([books, movies ]) => ({
        books,
        movies
      }))
      .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies()
getBooksAndMoviesPromise.then(
    function resolveCallback(results){
        console.log('getBooksAndMoviesPromise', results);
    }
)

function getBooksOrMovies() {
    return Promise.race([fetchBooks(),fetchMovies()]).then(results => results)
    .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies()
getBooksOrMoviesPromise.then(
    function resolveCallback(results){
        console.log('getBooksOrMoviesPromise', results);
    }
)
//Task-2
// export function fetchMovies(){
//     const resolveFunction = () => movies;
//     return fetchWithTimeout(1000).then(resolveFunction)
// }

// let moviePromise = fetchMovies()
// moviePromise.then(
//     function resolveCallback(results){
//         console.log(results)
//     }
// )