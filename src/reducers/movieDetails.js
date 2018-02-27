import { MOVIE_DETAILS } from "../actions/types";


export default function movieReducer(state = null, action = {}) {
    switch (action.type) {
        case MOVIE_DETAILS:
            console.log('movieReducer', action.payload);
           
            return "hi";
        
        default:
            return state;
    }
}