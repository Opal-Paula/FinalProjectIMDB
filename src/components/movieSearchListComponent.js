import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Movie from "./movieComponent";

class MovieSearchList extends Component {
    constructor(props) {
        super(props);
        console.log('das', props, props.id);
    }

    render() {
        return (
            <div className="container">
            {/* <h1>Movie component {this.props.id}</h1>
                <ul>
                    <li>
                        <Link to={'/id'}>Movie comp</Link>
                    </li>
                </ul> */}
                <h1>Search list</h1>
               
            </div>
        );
    }

}

export default MovieSearchList;
