import React from 'react';
import Home from './pages/home';
import Results from './pages/results';
import Bookmarks from './pages/bookmarks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/"
              component={Home} />
            <Route exact path="/search-results"
              component={Results} />
            <Route exact path="/bookmarks"
              component={Bookmarks} />
          </Switch>
        </Router>
      </>
    );
  }
}
