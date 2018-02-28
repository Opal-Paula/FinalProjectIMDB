import React from 'react';


class MovieDetails extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.movie.Title}</h2>
                <img src={this.props.movie.Poster} width="500" alt="moviePoster" />
                <section>
                    {/* {this.props.movie.Year} */}
                </section>
            </div>

        );
    }
}

export default MovieDetails;