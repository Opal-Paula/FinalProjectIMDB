import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchMovieAction } from "../actions";
import Movie from "./movie.js"

class SearchPage extends Component {
    render() {
        this.show = <div className="lead">Result not found for {this.props.location.search.replace(/([?])/, '')}</div>;
        if (this.props.search.length > 0) {
            let movieDataGeneral = this.props.search.map(
                movie => ({ 
                    poster: movie.Poster, 
                    title: movie.Title, 
                    rating: movie.imdbRating, 
                    id: movie._id, 
                    country: movie.Country,
                    genre: movie.Genre,
                    lang: movie.Language,
                    runtime: movie.Runtime,
                    type: movie.Type,
                    year: movie.Year,
                    votes: movie.imdbVotes
                 })
            );            
            this.show = <Movie movie={movieDataGeneral}/>
        } 
        return (
            this.show
    );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovieAction }, dispatch);
}

function mapStateToProps(state) {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);