import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import MovieList from "./movieList";
import { movieDetails } from "../actions";
import MovieDetails from "./movieDetails";
import "./home.css";

class MoviesListRecent extends Component {
    render() {

        return (
            <div className="container homepage">
                <h1 className="text-center">Swipe and choose a movie</h1>
                <MovieList tag="recent" />
            </div>
        );

    }

}


export default MoviesListRecent;
