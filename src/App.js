import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Icon } from 'react-fa';

import Header from './components/header';
import Register from './components/register';
import Login from './components/login';
import SearchBar from "./components/searchBar";
import MovieDetails from './components/movieDetails';
import MoviesListRecent from "./components/homepage";
import AllMovies from "./components/allMovies";
import SearchPage from "./components/searchPage";
import DetailsPage from "./components/detailsPage";
import Footer from "./components/footer";

import logo from './logo.png';
import './App.css';

class App extends React.Component {
  render() {
    return ([
      <BrowserRouter key="3">
        <div className="container header-main">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <Link to="/" className="link-button">
                <img src={logo} alt="websiteLogo" className="img-fluid" />
              </Link>
            </div>
             
            <SearchBar /> 
            
            <div className="col-4 col-md-6 col-lg-1 lead div-reg-btn">
              <Link to="/register">
                <span className="">
                  <Icon name="user-plus" data-toggle="tooltip" title="Register">Register</Icon>
                </span>
              </Link>
            </div>
            <div className="col-3 col-md-3 col-lg-1 lead div-login-btn">  
              <Link to="/login">
                <span className="">
                  <Icon name="user-circle" data-toggle="tooltip" title="Login">Login</Icon>
                </span>
              </Link>
            </div>
          </div>
          <Header />          
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact={true} path="/" component={MoviesListRecent} />
          <Route exact path="/movies" component={AllMovies} />
          <Route exact path="/movie" component={MovieDetails} />

          <Route path="/searchpage" component={SearchPage} />
          <Route path="/details" component={DetailsPage} />
        </div>        
      </BrowserRouter>,
      <Footer key="4" />
    ]);
  }
}

export default App;
