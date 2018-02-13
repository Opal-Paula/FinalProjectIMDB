import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Movie from "./components/movieComponent";
import MoviesList from "./components/moviesListComponent";
import MovieSearchList from "./components/movieSearchListComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* <Route exact={true} path="/" component={MoviesList} /> */}
          {/* <Route exact path="/search" component={MovieSearchList} />    */}
          <Movie tag="all" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
