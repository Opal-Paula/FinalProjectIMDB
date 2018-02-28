import React from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';


import { movieDetails } from "../actions";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log('md', props);
    }
    render() {
        if (!this.props.moviedetails) {
            return <div>Loading ...</div>;
        }
        let movieDetailsData = this.props.moviedetails(
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
                    votes: movie.imdbVotes,
                    website: movie.Website
                })
        );
        
        return (
            <div>
                <h2>Title</h2>
                <img src="" width="500" alt="moviePoster" />
                <section>
                </section>
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


export default connect(null, mapDispatchToProps)(MovieDetails);