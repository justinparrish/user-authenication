import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './components/Home'
import Fibonacci from './components/Fibonacci'

const config = {
  issuer: 'https://dev-890005.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa1kwqwg4FsITfDK357',
  pkce: true
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security {...config}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
          <Route path='/fibonacci' component={Fibonacci} />
        </Security>
      </Router>
    );
  }
}

export default App;
