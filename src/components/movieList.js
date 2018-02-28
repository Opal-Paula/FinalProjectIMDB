import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { movieAction } from "../actions";
import  CarouselMovie  from "./carousel";
import Movie from "./movie";

class MovieList extends Component {
    constructor(props) {
        super(props);
        switch (props.tag) {
            case 'all':
                this.show = 'all';
                break;
            case 'recent':
                this.show = 'recent';
                break;
            default:
                this.show = 'paged';
                this.rendered = <p>No movies here!</p>;
        }
    }
    componentDidMount() {
        this.props.movieAction(this.show);
    }
    render() {
        if (!this.props.movies) {
            return <div>Loading ...</div>;
        }
        let items = this.props.movies.map(
            movie => ({ src: movie.Poster, altText: movie.Title, caption: movie.Genre, id: movie._id })
        );
        let movieDataGeneral = this.props.movies.map(
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
        switch (this.props.tag) {
            case 'all':
                this.rendered = <Movie movie={movieDataGeneral} />;
                break;
            case 'recent':
                this.rendered = <CarouselMovie items={items} />;
                break;
            default:
                this.show = 'paged';
                this.rendered = <p>No movies here!</p>;
        }
        return (
            <div>
                {this.rendered}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ movieAction }, dispatch);
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
