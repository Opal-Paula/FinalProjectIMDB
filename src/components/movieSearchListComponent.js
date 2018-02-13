import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Movie from "./movieComponent";

class MovieSearchList extends Component {
    render() {
        return (
            <div className="container">
                <h1>Search list</h1>
                <Movie tag="all" />
            </div>
        );
    }

}

export default MovieSearchList;
