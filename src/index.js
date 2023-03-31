import { fetchWithTimeout } from "./services";

let movies = require ("./data/movies.json")

export function fetchMovies(){
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction)
}

function resolveCallback(results){
    console.log(results)
}

let moviePromise = fetchMovies()
moviePromise.then(resolveCallback(movies))