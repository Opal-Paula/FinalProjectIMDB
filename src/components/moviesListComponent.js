import React, { Component } from 'react';

import Movie from "./movieComponent";

class MoviesListRecent extends Component {
    render() {
        return (
            <div className="container">
                <h1>Home, top 10 recent movies</h1>
                <Movie tag="recent" />
            </div>            
        );
    }

}

export default MoviesListRecent;
