import { MOVIE_DETAILS } from "../actions/types";

export default function movieDetailsReducer(state = null, action = {}) {
    switch (action.type) {
        case MOVIE_DETAILS:
            return action.payload.data;        
        default:
            return state;
    }
}