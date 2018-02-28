import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';

import {Button} from 'reactstrap';
import { movieDetails } from "../actions";

class DetailsButton extends Component {
    constructor(props){
    super(props);
//            console.log('prop', props);
    }
    handleClick = (e) => {
        this.props.movieDetails(e.target.getAttribute("data-id"));
    }
    render () {
        return(
            <Button 
                color="secondary" 
                data-id={this.props.item} 
                className={this.props.cs}
                onClick={this.handleClick.bind(this)}>Details</Button>
        );
}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({movieDetails}, dispatch);
}
export default connect(null, mapDispatchToProps)(DetailsButton);
//export default DetailsButton;




