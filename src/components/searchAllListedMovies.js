import React, { Component } from 'react';

import MovieList from "./movieList";
import "./styles.css";

class MovieSearchList extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Search list</h1>
                <MovieList tag="all" />
            </div>
        );
    }
}

export default MovieSearchList;