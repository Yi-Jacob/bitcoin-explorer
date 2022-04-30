import React from 'react';
import Home from './pages/home';
import Results from './pages/results';
import Bookmarks from './pages/bookmarks';
import Transactions from './pages/transactions';
import Mining from './pages/mining';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Route exact path="/transactions"
              component={Transactions} />
            <Route exact path="/mining"
              component={Mining} />
          </Switch>
        </Router>
      </>
    );
  }
}
