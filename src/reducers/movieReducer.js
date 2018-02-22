import { MOVIE_DATA_RECENT, MOVIE_DATA_ALL, MOVIE_DATA_PAGED } from "../actions/types";


export default function movieReducer(state = null, action = {}) {
    switch (action.type) {
        case MOVIE_DATA_RECENT:
            console.log('movieReducer', action.payload, action.payload.data.results, state);
            let arrMovies = [];

            arrMovies = action.payload.data.results
                .filter(value => value.Year > 2013)
                .sort((a, b) => b.Year - a.Year);

            while (arrMovies.length > 10) {
                arrMovies.pop();
            }
            console.log('arrMovies', arrMovies);
            // return arrMovies;
            return arrMovies;
        case MOVIE_DATA_ALL:
            let year = action.payload.data.results.sort(function (a, b) {
                return b.Year - a.Year;
            });

            return year;
        default:
            return state;
    }
}