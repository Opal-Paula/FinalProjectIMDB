import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchMovieAction } from "../actions";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';
   import './styles.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            search: "",
            searchVal: "",
            dropdownOpen: false  
        }
    }
    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
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
            <div className="row col">
                <div className="col-9 pt-3 mt-1">
                    <input type="text" 
                        placeholder="Search a movie" 
                        id="txt-input" 
                        className="search_input"
                        onChange={this.onSearchFieldWrite} 
                        aria-label="Text input with dropdown button" />
                </div>
                <div className="col-3 pt-4 mt-1">
                    <select className="select-search-option" onChange={this.onSearchPick}>
                        <option value="Title">Title</option>
                        <option value="Year">Year</option>
                        <option value="Runtime">Runtime</option>
                        <option value="Genre">Genre</option>
                        <option value="Language">Language</option>
                        <option value="Country">Country</option>
                        <option value="Poster">Poster</option>
                        <option value="imdbRating">Imdb Rating</option>                    
                        <option value="imdbVotes">Imdb Votes</option>
                        <option value="imdbID">Imdb ID</option>
                        <option value="Type">Type</option>
                    </select>
                </div>
            </div>            
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
