import { SEARCH_MOVIE } from "../actions/types";

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            console.log('search SEARCH_MOVIE',action, action.payload);

            // return [...state, action.payload.data];
            return "SEARCH_MOVIE";
        
        default:
            return state;
    }
}

