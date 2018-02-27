import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Lupa from './lupa.png';
import { searchMovieAction } from "../actions";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            searchVal: ""
        }
       
    }
    onSearchFieldWrite = (e) => {
        this.setState({
            searchVal: e.target.value
        })
    }
    onSearchPick = (e) => {
        console.log('pick',e.target.value);
        this.setState({
            search: e.target.value
        })     
        this.props.searchMovieAction(this.state.search, this.state.searchVal);     
    }
    render() {                  
        return (
            <div className="input-container">
                <input type="text" 
                placeholder="Search a movie" 
                id="txt-input" 
                className="txt_input"
                onChange={this.onSearchFieldWrite} />
                <div className="input-img">
                    <img src={Lupa} alt="magnifyingGlass" className="input-img" />
                </div>
                <select className="select-search-option" onChange={this.onSearchPick}>
                    <option value="SEARCH_TITLE">Title</option>
                    <option value="SEARCH_YEAR">Year</option>
                    <option value="SEARCH_RUNTIME">Runtime</option>
                    <option value="SEARCH_GENRE">Genre</option>
                    <option value="SEARCH_LANGUAGE">Language</option>
                    <option value="SEARCH_COUNTRY">Country</option>
                    <option value="SEARCH_POSTER">Poster</option>
                    <option value="SEARCH_RATING">Imdb Rating</option>                    
                    <option value="SEARCH_VOTES">Imdb Votes</option>
                    <option value="SEARCH_ID">Imdb ID</option>
                    <option value="SEARCH_TYPE">Type</option>
                </select>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovieAction }, dispatch);
}

function mapStateToProps(state) {
    console.log('ss', state)
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
