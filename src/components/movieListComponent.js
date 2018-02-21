import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { movieAction } from "../actions";
import { CarouselMovie } from "./carousel";

class MovieList extends Component {
    constructor(props) {
        super(props);

        //switch case all , recent, paged = default
        this.show = '';
        if (props.tag === 'all') {
            this.show = 'all';
        } else if (props.tag === 'recent') {
            this.show = 'recent';
        } else {
            this.show = 'paged';
        }


        // this.urlQuery = '';
        // if ((props.tag === 'all') || (props.tag === 'recent')) {
        //     this.urlQuery = '?take=40';
        // } 
    }
    componentDidMount() {
        this.props.movieAction(this.show);
    }
    render() {
        console.warn('Props', this.props);
        if (!this.props.movies) {
            return <div>Loading ...</div>;
        }
        let items = this.props.movies.map(
            movie => ({ src: movie.Poster, altText: movie.Title, caption: movie.Genre, id: movie._id })
        );
        return (
            <div>
                <CarouselMovie items={items} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    // console.log('dd',dispatch, {movie})
    return bindActionCreators({ movieAction }, dispatch);
}

function mapStateToProps(state) {
    console.warn('State', state);
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);