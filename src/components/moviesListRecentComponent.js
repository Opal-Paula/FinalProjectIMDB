import React, { Component } from 'react';

import MovieList from "./movieListComponent";

class MoviesListRecent extends Component {
    render() {
        return (
            <div className="container">
                <h1>Top 10 recent movies</h1>
                <MovieList tag="recent" />
            </div>            
        );
    }

}

export default MoviesListRecent;
