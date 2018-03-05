import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { Button } from 'reactstrap';
import { movieDetails } from "../actions";

//the Details btn shown on all movies. Now examples are on Homepage and Movies
class DetailsButton extends Component {
    handleClick = (e) => {
        this.props.movieDetails(e.target.getAttribute("data-id"));
    }
    render() {
        return (
            <Link className="col-2" to={{
                pathname: '/details',
                search: `?${this.props.item}`
            }}>
                <Button
                    color="secondary"
                    data-id={this.props.item}
                    className={this.props.cs}
                    onClick={this.handleClick.bind(this)}>Details</Button>
            </Link>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ movieDetails }, dispatch);
}
export default connect(null, mapDispatchToProps)(DetailsButton);




