import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { movieDetails } from "../actions";
import MovieDetails from "./movieDetails";

class DetailsPage extends Component {   
    render() {
        this.show = <div>No details found</div>;
        if (this.props.moviedetails) {
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
            this.show = <MovieDetails movie={this.movieDetailsData} />;
        }
        return(
            this.show
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


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);