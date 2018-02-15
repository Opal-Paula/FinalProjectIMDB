import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row, Col, CardFooter, Progress
} from 'reactstrap';

import { movieAction } from "../actions";
import { Example } from "./carousel";
import "./movie.css";

class Movie extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            movies: [],
            pagination: {}
        };
        this.show = [];
        /* this.urlQuery = '';
        if ((props.tag === 'all') || (props.tag === 'recent')) {
            this.urlQuery = 'movies?take=40';
            // console.log(this.urlQuery);
        } else if (props.tag === 'paged') {
            this.urlQuery = 'movies';
        }

        // console.log(this.urlQuery);
        // movie(this.urlQuery);
        console.log(movie(this.urlQuery))
        this.url = 'http://localhost:8000/' + this.urlQuery;
        console.log(this.url); */


    }
    componentDidMount() {
        this.props.movieAction();
        /* axios
            .get(this.url)
            // .then(response => console.log(response.data))
            .then(response => this.setState({
                movies: response.data.results,
                pagination: response.data.pagination
            })) */
        
        // fetch(this.url)
        //     .then(response => response.json())
        //     .then(data => this.setState({ movies: data.results, pagination: data.pagination }))
    }
    movieDataRecent(data) {
        // console.log('wda', data);
        let arrMovies = [];

        arrMovies = data
            .filter(value => value.Year > 2013)
            .sort((a, b) => b.Year - a.Year);

        while (arrMovies.length > 10) {
            arrMovies.pop();
        }
        // console.log(arrMovies);
        return arrMovies;
    }
    movieDataFullList(data) {
        // console.log('wdaff', data);
        let year = data.sort(function (a, b) {
            return b.Year - a.Year;
        });

        return year;
    }
    movieDataPage(data, page) {
        console.log(data, page);
    }
    renderMovieShowAllData(movie) {
        return (
            <div className="adawd">
                {this.renderMovieShowHomepage(movie)}
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
                    <em>Type</em> {movie.Type}
                </p>
                <p>
                    <em>Year</em> {movie.Year}
                </p>

                <p>
                    <em>Votes</em> {movie.imdbVotes}
                </p>
            </div>
        );
    }
    renderMovieShowHomepage(movie) {
        return (
            <Card body>
                <CardImg
                    top
                    width="100%"
                    src={movie.Poster}
                    alt={movie.Title} />

                <CardFooter>
                    <CardTitle>{movie.Title}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>
                        
                        <div className="text-center">{movie.imdbRating} of 10 Rating</div>
                        <Progress 
                        color={movie.imdbRating > 8.5 ? "success" : movie.imdbRating > 6 ? "warning" : "danger"} 
                        value={movie.imdbRating} max="10" />
                    </CardText>
                    <Button>Add</Button>
                </CardFooter>
            </Card>

        );
    }
    render() {
        console.warn('Props', this.props);
        if(!this.props.movies) {
            return <div>Loading ...</div>;
        }
        const a = this.state.movies;
        console.log('asdaw', a);

        if (this.props.tag === 'all') {
            {
                this.show = this.movieDataFullList(a).map(movie =>
                    // console.log(movie)
                    <div id={movie._id} key={movie._id}>
                        {this.renderMovieShowAllData(movie)}
                    </div>
                )
            }
        } else if (this.props.tag === 'recent') {
            {
                this.show = this.movieDataRecent(a).map(movie =>
                    // console.log(movie)                    

                    <Col sm="4" md="3" id={movie._id} key={movie._id}>
                        {this.renderMovieShowHomepage(movie)}

                    </Col>


                )
            }
        }
        let items = this.props.movies.results.map(
            movie => ({ src: movie.Poster, altText: movie.Title, caption: movie.Title })
        );
        console.warn('MovieComponent', items);
        return (
            <Row>
                {this.show}
                <Example items={items} />

            </Row>

        );
    }
}

// export default Movie;

function mapDispatchToProps(dispatch) {
    // console.log('dd',dispatch, {movie})
    return bindActionCreators({ movieAction }, dispatch);
}

// function mapStateToProps(state) {
//     return {
//         books: state.books
//     }
// }

function mapStateToProps(state) {
    console.warn('State', state);
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);