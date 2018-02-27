import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home';
import Header from './components/header';
import Main from './components/main';
import Register from './components/register';
import Login from './components/login';
import './App.css';
import logo from './logo.png';

import SearchBar from "./components/searchBar";
import MoviesListRecent from "./components/moviesListRecent";
import MovieSearchList from "./components/searchAllListedMovies";

class App extends React.Component {
  render() {
    return ([
      <BrowserRouter>
        <div className="container">
          <Link to="/" className="link-button">
            <img src={logo} alt="websiteLogo" className="imdb-Logo" />
          </Link>
          <SearchBar />
          <Header />

          <Route exact={true} path="/" component={MoviesListRecent} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/searchpage" component={MovieSearchList} />
        </div>
      </BrowserRouter>
    ]);
  }
}

export default App;
