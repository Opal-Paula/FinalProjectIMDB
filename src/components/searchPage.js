import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchMovieAction } from "../actions";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        console.log('pp', props.movieDetails);
    }
    render() {
        return (
        <div>Search page</div>
    );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovieAction }, dispatch);
}

function mapStateToProps(state) {
    return {
        search: state.search
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
export default SearchPage;