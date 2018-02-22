import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import MovieList from "./movieListComponent";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row, Col, CardFooter, Progress, CardHeader
} from 'reactstrap';
import "./styles.css";

class MovieSearchList extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Search list</h1>
                <MovieList tag="all" />
            </div>
        );
    }

}

class MovieSearchListShow extends Component {
    constructor(props) {
        super(props);
        console.log('search', props, props.movie.poster);
    }
    render() {
        console.log(this.props.movie.title);
        if (!this.props.movie) {
            return (
                <div>Loading ...</div>
            );
        }

        let moviesData = this.props.movie.map((movie) => {
            return (
                <Card className="col col-12 col-sm-12 col-md-6 col-lg-3" key={movie.id}>
                    <CardHeader className="img-search">
                        <CardImg
                            top
                            width="100%"
                            src={movie.poster}
                            alt={movie.title} />
                    </CardHeader>
                    <CardBody>
                        <CardTitle>{movie.Title}</CardTitle>
                        <div className="text-center">{movie.rating} of 10 Rating</div>
                        <Progress
                            color={movie.rating > 8.5 ? "success" : movie.rating > 6 ? "warning" : "danger"}
                            value={movie.rating} max="10" />
                        <p className="info">
                            <em className="em">Country</em> {movie.country}
                        </p>
                        <p className="info">
                            <em className="em">Genre</em> {movie.genre}
                        </p>
                        <p className="info">
                            <em className="em">Language</em> {movie.lang}
                        </p>
                        <p className="info">
                            <em className="em">Runtime</em> {movie.runtime}
                        </p>
                        <p className="info">
                            <em className="em">Type</em> {movie.type}
                        </p>
                        <p className="info">
                            <em className="em">Year</em> {movie.year}
                        </p>
                        <p className="info">
                            <em className="em">Votes</em> {movie.votes}
                        </p>
                    </CardBody>
                    <CardFooter>
                        <Button color="secondary" data-id={movie.id} className="btn-details">Details</Button>
                        <Button color="primary" data-id={movie.id} className="add-recent">Add to collection</Button>
                    </CardFooter>
                </Card>
            );
        });

        return (
            <Row className="row-movies-search">{moviesData}</Row>
        );
    }

}

export { MovieSearchList, MovieSearchListShow };