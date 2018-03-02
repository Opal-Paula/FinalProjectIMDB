import React from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';


import { movieDetails } from "../actions";

//shows more details of the movie selected
class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>Actors {this.props.movie.Actors}</h2>
                <img src={this.props.movie.Poster} width="500" alt="moviePoster" />
                <section>
                </section>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({movieDetails}, dispatch);
}

function mapStateToProps(state) {
    return {
        moviedetails: state.moviedetails
    };
}

export default connect(null, mapDispatchToProps)(MovieDetails);