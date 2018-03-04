import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


import { movieDetails } from "../actions";
import './movieDetails.css';

//shows more details of the movie selected
class MovieDetails extends React.Component {
    render() {
        return (
            <div className="container">
                <img src={this.props.movie.Poster} width="200" alt="moviePoster" className="img" />

                <section>
                    <h2>{this.props.movie.Title} ({this.props.movie.Year})</h2>
                    <p> Genre : {this.props.movie.Genre}</p>
                    <p>Language : {this.props.movie.Language}</p>
                    <p>Country : {this.props.movie.Country}</p>
                    <p>Actors : {this.props.movie.Actors}</p>
                    <p>Plot : {this.props.movie.Plot}</p>
                    <p>Director : {this.props.movie.Director}</p>
                    <p>IMDB Rating : {this.props.movie.imdbRating}</p>
                    <p>IMDB Votes : {this.props.movie.imdbVotes}</p>
                </section>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ movieDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieDetails);