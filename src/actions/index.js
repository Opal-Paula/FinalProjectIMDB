import { MOVIE_DATA_RECENT, MOVIE_DATA_ALL, MOVIE_DATA_PAGED, SEARCH_TITLE } from "./types";
import axios from 'axios';

const url = 'http://localhost:8000/movies';

export function movieAction(data = '') {
    console.log('daaaata', data);    
    let query = '', type = '';
    switch (data) {
        case 'recent':
            type = MOVIE_DATA_RECENT;
            query = '?take=40';
            break;
        case 'all':
            type = MOVIE_DATA_ALL;
            query = '?take=40';
            break;
        default:
            type = MOVIE_DATA_PAGED;
            query = '';
    }
    const result = axios.get(`${url}${query}`);
    return {
        type: type,
        payload: result
    }
}

export function searchMovieAction(type, data) {
    console.log(data);
    const result = axios.get(`${url}`+'?take=40');
    // console.log('result',result);
    return {
        type: [type, data],
        payload: result,
        meta: data
    }
}