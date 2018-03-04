import { SEARCH_MOVIE } from "../actions/types";

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return action.payload.data.results;        
        default:
            return state;
    }
}

