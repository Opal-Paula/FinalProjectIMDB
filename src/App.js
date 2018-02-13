import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MoviesListRecent from "./components/moviesListComponent";
import MovieSearchList from "./components/movieSearchListComponent";
import AuthExample from "./components/authComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact={true} path="/" component={MoviesListRecent} />
          <Route exact path="/search" component={MovieSearchList} />   
          <Route exact path="/auth" component={AuthExample} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
