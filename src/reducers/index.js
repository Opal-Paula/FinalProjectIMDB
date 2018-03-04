import {combineReducers} from 'redux';

import movieReducer from "./movieReducer";
import movieDetailsReducer from "./movieDetails";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers ({
    movies: movieReducer,
    moviedetails : movieDetailsReducer,
    search: searchReducer
});

export default rootReducer;


