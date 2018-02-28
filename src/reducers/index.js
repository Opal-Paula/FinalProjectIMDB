import {combineReducers} from 'redux';

import movieReducer from "./movieReducer";
import movieDetails from "./movieDetails";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers ({
    movies: movieReducer,
    details : movieDetails,
    search: searchReducer
});

export default rootReducer;


