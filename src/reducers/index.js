import {combineReducers} from 'redux';

import movieReducer from "./movieReducer";
import movieDetails from "./movieDetails";


const rootReducer = combineReducers ({
    movies: movieReducer,
    details : movieDetails
});

export default rootReducer;


