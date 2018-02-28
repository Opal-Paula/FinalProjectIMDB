import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';

import MovieList from "./movieList";
import { movieDetails } from "../actions";
import MovieDetails from "./movieDetails";
import "./home.css";

class MoviesListRecent extends Component {
    constructor(props){
    super(props);
            console.log('prop', props);
    }
    render() {           
        return (
            <div className="container homepage">
                <h1 className="text-center">Top 10 recent movies</h1>
                <MovieList tag="recent" />
                
            </div>            
        );        
    }
    

}

function mapDispatchToProps(dispatch) {
    // console.log('dd',dispatch, {movie})
    return bindActionCreators({movieDetails}, dispatch);
}

function mapStateToProps(state) {
    console.warn('State', state);
    return {
        moviedetails: state.moviedetails
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesListRecent);

