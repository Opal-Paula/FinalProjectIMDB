import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MoviesList from "./moviesListComponent";
import MovieSearchList from "./movieSearchListComponent";

class Movie extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            movies: []
        }
        this.show = [];
        this.urlQuery = '';
        if ((props.tag === 'all') || (props.tag === 'recent')) {
            this.urlQuery = 'movies?take=40';
            // console.log(this.urlQuery);
        } else if (props.tag === 'paged') {
            this.urlQuery = 'movies';
        }

        // console.log(this.urlQuery);
        this.url = 'https://ancient-caverns-16784.herokuapp.com/' + this.urlQuery;
        console.log(this.url);


        
    }
    componentDidMount() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.results }))
        // .then(this.movieDataRecent)
    }
    movieDataRecent(data) {
        console.log('wda', data);
        let arrMovies = [];

        arrMovies = data.filter(value => { if (value.Year > 2013) { return value; } });
        arrMovies.sort(function (a, b) {
            return b.Year - a.Year;
        });
        while (arrMovies.length > 10) {
            arrMovies.pop();
        }
        console.log(arrMovies);
        // this.setState({movies : arrMovies});
        return arrMovies;
    }
    movieDataFullList(data) {
        console.log('wdaff', data);
        let year = data.sort(function (a, b) {
            return b.Year - a.Year;
        });
        
        return year;
    }
    render() {
        const a = this.state.movies;        
        
        if (this.props.tag === 'all') {
            this.show = this.movieDataFullList(this.state.movies);
        } else if (this.props.tag === 'recent') {
            this.show = this.movieDataRecent(this.state.movies);
        }


        console.log('asdaw', a);
        return (
            <div>                
                {this.show.map(movie =>
                    // console.log(movie)
                    <div id={movie._id} key={movie._id}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <p>
                            <em>Country</em> {movie.Country}
                        </p>
                        <p>
                            <em>Genre</em> {movie.Genre}
                        </p>
                        <p>
                            <em>Language</em> {movie.Language}
                        </p>
                        <p>
                            <em>Runtime</em> {movie.Runtime}
                        </p>
                        <p>
                            <em>Title</em> {movie.Title}
                        </p>
                        <p>
                            <em>Type</em> {movie.Type}
                        </p>
                        <p>
                            <em>Year</em> {movie.Year}
                        </p>
                        <p>
                            <em>Rating</em> {movie.imdbRating}
                        </p>
                        <p>
                            <em>Votes</em> {movie.imdbVotes}
                        </p>
                    </div>
                )}
            </div>

        );
    }
}

export default Movie;

{/* <MoviesList
                        key={movie._id}
                        id={movie._id}
                        country={movie.Country}
                        genre={movie.Genre}
                        language={movie.Language}
                        runtime={movie.Runtime}
                        title={movie.Title}
                        type={movie.Type}
                        year={movie.Year}
                        rating={movie.imdbRating}
                        votes={movie.imdbVotes}
                        poster={movie.Poster}
                    />  */}