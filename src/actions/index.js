import {
MOVIE_DATA_RECENT,
        MOVIE_DATA_ALL,
        MOVIE_DATA_PAGED,
        SEARCH_MOVIE,
        MOVIE_DETAILS
        }
from "./types";
import axios from 'axios';

const url = 'http://localhost:8000/movies';

export function movieAction(data = '') {
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

export function movieDetails(id) {
    console.log('movie', id);
    const result = axios.get(`${url}/${id}`);
    console.log('action', result);
    return {
        type: MOVIE_DETAILS,
        payload: result
    }
}

export function searchMovieAction(category = 'take=40', query = '') {
    console.log('cc', category, query);
    const result = axios.get(`${url}?${category}=${query}`);
    console.log('result', result, `${url}?${category}=${query}`);
    return {
        type: SEARCH_MOVIE,
        payload: result
    }
}
