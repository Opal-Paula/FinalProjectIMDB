import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home';
import Header from './components/header';
import Main from './components/main';
import Register from './components/register';
import Login from './components/login';
import './App.css';
import logo from './logo.png';
import Lupa from './lupa.png';

class App extends React.Component {
  render() {
    return ([
      <BrowserRouter>
      <div className="container">
      <Link to="/" className="link-button">
        <img src={logo} alt="websiteLogo" class="imdb-Logo"/>
      </Link>
        <div className="input-container">
          <input type="text" placeholder="Search a movie" id="txt-input" className="txt_input"/>
          <div className="input-img">
            <img src={ Lupa } alt="magnifyingGlass" className="input-img"/>
          </div>
        </div>
        <Header />
        <Route exact path="/register" component={ Register }/>
        <Route exact path="/login" component={ Login }/>
      </div>
      </BrowserRouter>
    ]);
  }
}

export default App;
