import React, { Component } from 'react';

import MovieList from "./movieList";
import "./home.css";

class MoviesListRecent extends Component {
    render() {
        return (
            <div className="container homepage">
                <h1 className="text-center lead">Swipe and choose a movie</h1>
                <MovieList tag="recent" />
            </div>
        );

    }

}


export default MoviesListRecent;
