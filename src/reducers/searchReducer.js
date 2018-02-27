import {
    SEARCH_TITLE, SEARCH_RUNTIME, SEARCH_GENRE,
    SEARCH_LANGUAGE, SEARCH_COUNTRY, SEARCH_POSTER, SEARCH_RATING,
    SEARCH_VOTES, SEARCH_ID, SEARCH_TYPE, SEARCH_YEAR
} from "../actions/types";

export default function searchReducer(state = [], action) {
    console.log(action.type[0]);
    switch (action.type[0]) {
        case SEARCH_TITLE:
            console.log('search title',action);

            // return [...state, action.payload.data];
            return "SEARCH_TITLE";
        case SEARCH_RUNTIME:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_RUNTIME";
        case SEARCH_GENRE:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_GENRE";
        case SEARCH_LANGUAGE:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_LANGUAGE";
        case SEARCH_COUNTRY:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_COUNTRY";
        case SEARCH_POSTER:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_POSTER";
        case SEARCH_RATING:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_RATING";
        case SEARCH_VOTES:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_VOTES";
        case SEARCH_ID:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_ID";
        case SEARCH_TYPE:
            // console.log('search here', action.payload.data.results, state);

            // return [...state, action.payload.data];
            return "SEARCH_TYPE";
        case SEARCH_YEAR:
            // console.log('search here', action.payload.data.results, state);
            let year = action.payload.data.results
            .filter(value => value.Year == action.type[1])
            .map(value => value._id);
            // return [...state, action.payload.data];
            console.log('year',year, action.type[1]);
            return year;
        default:
            return state;
    }
}

