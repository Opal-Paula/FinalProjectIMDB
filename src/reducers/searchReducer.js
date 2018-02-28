import { SEARCH_MOVIE } from "../actions/types";

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_MOVIE:
//            console.log('search SEARCH_MOVIE',action, action.payload.data.results);
            return "SEARCH_MOVIE";        
        default:
            return state;
    }
}

