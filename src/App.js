import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home';
import Header from './components/header';
import Main from './components/main';
import Register from './components/register';
import Login from './components/login';
import './App.css';
import logo from './logo.png';
// import Lupa from './lupa.png';

import SearchBar from "./components/searchBar";
import MoviesListRecent from "./components/moviesListRecent";
import MovieSearchList from "./components/searchAllListedMovies";



class App extends React.Component {
  render() {
    return ([
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Link to="/" className="link-button">
                <img src={logo} alt="websiteLogo" class="imdb-Logo"/>
               </Link> 
            </div>
             
            <SearchBar /> 
            
            <div className="col-1 mx-auto w-75 pt-4 mt-1">
              <Link to="/register" component={ Register }>
                <div className="div-reg-btn">
                  <i className="fab fa-500px" data-toggle="tooltip" title="Register">Register</i>
                  {/* <span className="reg-btn-img" ></span> */}
                </div>
              </Link>
            </div>
            <div className="col-1 mx-auto w-75 pt-4 mt-1">  
              <Link to="/login" component={ Login }>
                <div className="div-login-btn">
                  <i className="far fa-user-circle" data-toggle="tooltip" title="Login">Login</i>
                  {/* <span className="login-btn-img" ></span> */}
                </div>
              </Link>
            </div>
          </div>
        <Header />
        <Route exact path="/register" component={ Register }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact={true} path="/" component={MoviesListRecent} />
        <Route exact path="/searchpage" component={MovieSearchList} />
      </div>
      </BrowserRouter>
    ]);
  }
}

export default App;
