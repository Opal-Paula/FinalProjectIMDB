import { SEARCH_MOVIE } from "../actions/types";

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return "SEARCH_MOVIE";        
        default:
            return state;
    }
}

