import React from 'react';
import Home from './pages/home';
import Results from './pages/results';
import parseRoute from './lib/parse-route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidUpdate() {
    window.addEventListener('hashchange', () => {
      const parsedRoute = parseRoute(window.location.hash);
      this.setState({ route: parsedRoute });
    });
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/"
              component={Home} />
            <Route exact path="/search-results"
              component={Results} />
          </Switch>
        </Router>
      </>
    );
  }
}
