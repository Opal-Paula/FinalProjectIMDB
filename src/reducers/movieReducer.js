import { MOVIE_DATA } from "../actions/types";


export default function movieReducer(state = null, action = {}) {
    switch (action.type) {
        case MOVIE_DATA:
            console.log('movieReducer', action.payload, state);
            return action.payload.data;
        default:
            return state;
    }
}