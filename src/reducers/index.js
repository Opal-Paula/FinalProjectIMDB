import {combineReducers} from 'redux';

import movieReducer from "./movieReducer";
<<<<<<< HEAD
import movieDetails from "./movieDetails";


const rootReducer = combineReducers ({
    movies: movieReducer,
    details : movieDetails
=======
import searchReducer from "./searchReducer";

const rootReducer = combineReducers ({
    movies: movieReducer,
    search: searchReducer
>>>>>>> master
});

export default rootReducer;


