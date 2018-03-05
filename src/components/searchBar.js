import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Icon } from 'react-fa';

import { searchMovieAction } from "../actions";
import { Button } from 'reactstrap';
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
        this.a = document.createElement('div');
        this.a.className = 'alert alert-warning fade show msg-search'
        this.a.innerText = 'Empty input. Please complete the search field!';
    }
    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    onSearchFieldWrite = (e) => {
        if (e.target.value.length <= 0) {
            document.querySelector('.header-main').prepend(this.a);
        } else if (document.querySelector('.msg-search')) {
            document.querySelector('.msg-search').remove();
        }
        this.setState({
            searchVal: e.target.value
        })
    }
    onSearchPick = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    onSearchSubmit = (e) => {
        if (this.state.search.length > 0) {
            this.props.searchMovieAction(this.state.search, this.state.searchVal);
        }
        if (!document.querySelector('.search_input').value) {
            document.querySelector('.header-main').prepend(this.a);
        } else if (document.querySelector('.msg-search')) {
            document.querySelector('.msg-search').remove();
        }
        document.querySelector('.search_input').value = '';
        this.setState({
            search: "",
            searchVal: "",
        })
    }
    render() {
        return (
            <div className="row search">
                <div className="col-12 col-md-12 pt-2 mt-1 row">
                    <Link className="col-3 col-md-3 col-lg-3" to={{
                        pathname: '/searchpage',
                        search: `?${this.state.search}=${this.state.searchVal}`
                    }}>
                        <Button color="secondary" size="md" className="loop" onClick={this.onSearchSubmit}>
                            <Icon name="search" size="2x" className=""></Icon>
                        </Button>
                    </Link>
                    <input type="text"
                        placeholder="Search a movie"
                        id="txt-input"
                        className="search_input col-8 col-md-8 col-lg-8 lead form-control "
                        onChange={this.onSearchFieldWrite}
                        aria-label="Text input with dropdown button" />    
                </div>
                <div className="col-10 col-md-5 col-lg-5 pt-4 pr-1 mt-1">
                    <select className="select-search-option lead" onChange={this.onSearchPick}>
                        <option value="">Search by tag</option>
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
