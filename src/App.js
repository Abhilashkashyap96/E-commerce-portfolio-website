import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/checkout' component={CheckoutPage} />
        </Switch>
      </Router>
    );
  };
}

export default App
