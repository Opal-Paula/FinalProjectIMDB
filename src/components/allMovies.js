import React, { Component } from 'react';

import MovieList from "./movieList";
import "./styles.css";

class AllMovies extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">All Movies</h1>
                <MovieList tag="all" />
            </div>
        );
    }
}

export default AllMovies;