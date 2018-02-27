import { MOVIE_DATA_RECENT, MOVIE_DATA_ALL, MOVIE_DATA_PAGED } from "./types";
import axios from 'axios';


export function movieAction(data = '') {
    console.log('daaaata', data);
    const url =
        'http://localhost:8000/movies';

    let query = '';
    let type = '';
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

    console.log('action', `${url}${query}`);
    const result = axios.get(`${url}${query}`);

    //console.log('action',result);

    return {
        type: type,
        payload: result
    }
}

export function movieDetails(id) {
    console.log('movie', id);
    const url =
        'http://localhost:8000/movies/';

    
    let type = 'MOVIE_DETAILS';
   
    const result = axios.get(`${url}${id}`);


    console.log('action',result);

    return {
        type: 'MOVIE_DETAILS',
        payload: result
    }
}