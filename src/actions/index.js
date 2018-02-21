import {MOVIE_DATA_RECENT} from "./types";
import axios from 'axios';

export function movieAction(data = '') {
    console.log('daaaata', data);
    const url =
    'http://localhost:8000/movies';
    
    let query = '';
    let type = '';
    //can use switch
    if (data === 'recent') {
        query = '?take=40';
        type = MOVIE_DATA_RECENT;
    }


    console.log('action',`${url}${query}`);
    const result = axios.get(`${url}${query}`);

    //console.log('action',result);

    return {
        type: type,
        payload: result
    }
}