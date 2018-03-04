import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import MovieList from "./movieList";
import { movieDetails } from "../actions";
import MovieDetails from "./movieDetails";
import "./home.css";

class MoviesListRecent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.moviedetails) {
            console.log('ll', this.props.moviedetails)
            let mvd = this.props.moviedetails;
            this.movieDetailsData = {
                Genre: mvd.Genre,
                Poster: mvd.Poster,
                Title: mvd.Title,
                Language: mvd.Language,
                Country: mvd.Country,
                Actors: mvd.Actors,
                Plot: mvd.Plot,
                Year: mvd.Year,
                Director: mvd.Director,
                imdbRating: mvd.imdbRating,
                imdbVotes: mvd.imdbVotes
            }
            return (
                <div className="container homepage">
                    <h1 className="text-center">Top 10 recent movies</h1>
                    <MovieList tag="recent" />
                    <MovieDetails movie={this.movieDetailsData} />
                </div>

            )
        }
        return (
            <div className="container homepage">
                <h1 className="text-center">Top 10 recent movies</h1>
                <MovieList tag="recent" />
            </div>
        );

    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ movieDetails }, dispatch);
}

function mapStateToProps(state) {
    return {
        moviedetails: state.moviedetails
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesListRecent);

