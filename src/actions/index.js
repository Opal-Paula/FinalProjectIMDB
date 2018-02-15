import {MOVIE_DATA} from "./types";
import axios from 'axios';

export function movieAction(data = '') {
    const url =
    'http://localhost:8000/movies';
    console.log('action',`${url}${data}`);
    const result = axios.get(`${url}${data}`);

    //console.log('action',result);

    return {
        type: MOVIE_DATA,
        payload: result
    }
}