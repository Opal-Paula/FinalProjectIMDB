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
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import MoviesListRecent from "./components/moviesListRecentComponent";
import { MovieSearchList } from "./components/searchComponent";


import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

fontawesome.library.add(faUser)
fontawesome.library.add(faCircle)
fontawesome.library.add(faFacebook)



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
            <div className="col-8"> 
              <div className="input-group mx-auto w-75 pt-3 mt-1 ">
                <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">AAA</a>
                        <a className="dropdown-item" href="#">BBB</a>
                        <a className="dropdown-item" href="#">CCC</a>
                        <div role="separator" className="dropdown-divider"></div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-1 mx-auto w-75 pt-3 mt-1">
              <Link to="/register" component={ Register }>
                <div className="div-reg-btn">
                  <i className="fab fa-500px" data-toggle="tooltip" title="Register"></i>
                  {/* <span className="reg-btn-img" ></span> */}
                </div>
              </Link>
            </div>
            <div className="col-1 mx-auto w-75 pt-3 mt-1">  
              <Link to="/login" component={ Login }>
                <div className="div-login-btn">
                  <i className="far fa-user-circle" data-toggle="tooltip" title="Login"></i>
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
