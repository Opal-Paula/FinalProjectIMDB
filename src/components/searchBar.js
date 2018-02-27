import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Lupa from './lupa.png';
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
                    
            
                {/* <input type="text" className="" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">AAA</a>
                        <a className="dropdown-item" href="#">BBB</a>
                        <a className="dropdown-item" href="#">CCC</a>
                        <div role="separator" className="dropdown-divider"></div>
                      </div>
                  </div> */}
            </div>
            // <div className="input-container">
            //     <input type="text" 
            //     placeholder="Search a movie" 
            //     id="txt-input" 
            //     className="txt_input"
            //     onChange={this.onSearchFieldWrite} />
            //     <div className="input-img">
            //         <img src={Lupa} alt="magnifyingGlass" className="input-img" />
            //     </div>
            //     <select className="select-search-option" onChange={this.onSearchPick}>
            //         <option value="SEARCH_TITLE">Title</option>
            //         <option value="SEARCH_YEAR">Year</option>
            //         <option value="SEARCH_RUNTIME">Runtime</option>
            //         <option value="SEARCH_GENRE">Genre</option>
            //         <option value="SEARCH_LANGUAGE">Language</option>
            //         <option value="SEARCH_COUNTRY">Country</option>
            //         <option value="SEARCH_POSTER">Poster</option>
            //         <option value="SEARCH_RATING">Imdb Rating</option>                    
            //         <option value="SEARCH_VOTES">Imdb Votes</option>
            //         <option value="SEARCH_ID">Imdb ID</option>
            //         <option value="SEARCH_TYPE">Type</option>
            //     </select>
            // </div>
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
