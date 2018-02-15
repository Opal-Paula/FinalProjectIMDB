import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MoviesListRecent from "./components/moviesListComponent";
import MovieSearchList from "./components/movieSearchListComponent";
import AuthExample from "./components/authComponent";
import {Example} from "./components/carousel";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        {/* <Example /> */}
          <Route exact={true} path="/" component={MoviesListRecent} />
          <Route exact path="/search" component={MovieSearchList} />   
          <Route exact path="/auth" component={AuthExample} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
