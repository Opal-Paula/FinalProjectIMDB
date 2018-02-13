import React, { Component } from 'react';

import Movie from "./movieComponent";

class MoviesList extends Component {
    constructor(props) {
        super(props);
        console.log('das', props, props.id);
    }
    
    render() {        
        return (
            <div id={this.props.id}>
                <img src={this.props.poster} alt={this.props.title} />
                <p>
                    <em>Country</em> {this.props.country}
                </p>
                <p>
                    <em>Genre</em> {this.props.genre}
                </p>
                <p>
                    <em>Language</em> {this.props.language}
                </p>
                <p>
                    <em>Runtime</em> {this.props.runtime}
                </p>
                <p>
                    <em>Title</em> {this.props.title}
                </p>
                <p>
                    <em>Type</em> {this.props.type}
                </p>
                <p>
                    <em>Year</em> {this.props.year}
                </p>
                <p>
                    <em>Rating</em> {this.props.rating}
                </p>
                <p>
                    <em>Votes</em> {this.props.votes}
                </p>                
            </div>
        );
    }

}

class MoviesListShow extends Component {
    render() {
        return (
            <div className="container">
                <h1>Home, top 10 recent movies</h1>
                <MoviesList />
            </div>
        );
    }
}

export default MoviesList;
