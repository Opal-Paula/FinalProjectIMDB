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

import MoviesListRecent from "./components/moviesListRecentComponent";


import fontawesome from '@fortawesome/fontawesome'
// import faUser from '@fortawesome/fontawesome-free-solid/faUser'
// import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

// fontawesome.library.add(faUser)
// fontawesome.library.add(faCircle)
// fontawesome.library.add(faFacebook)



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
            {/* <span className="input-img"></span> */}
            <img src={ Lupa } alt="magnifyingGlass" className="input-img"/>
          </div>
          
          
        </div>
        <Link to="/register" component={ Register }>
          <div className="div-reg-btn">
            <span className="reg-btn-img" data-toggle="tooltip" title="Register"></span>
          </div>
        </Link>
        <Link to="/login" component={ Login }>
          <div className="div-login-btn">
            <i class="fab fa-amilia"></i>
            <span className="login-btn-img" data-toggle="tooltip" title="Login"></span>
          </div>
        </Link>
        <Header />
        <Route exact path="/register" component={ Register }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact={true} path="/" component={MoviesListRecent} />
      </div>
      </BrowserRouter>
    ]);
  }
}

export default App;
