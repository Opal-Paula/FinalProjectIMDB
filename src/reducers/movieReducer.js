import { MOVIE_DATA_RECENT, MOVIE_DATA_ALL } from "../actions/types";

export default function movieReducer(state = null, action = {}) {
    switch (action.type) {
        case MOVIE_DATA_RECENT:
            let arrMovies = [];
            arrMovies = action.payload.data.results
                .filter(value => value.Year > 2013)
                .sort((a, b) => b.Year - a.Year);
            while (arrMovies.length > 10) {
                arrMovies.pop();
            }
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
