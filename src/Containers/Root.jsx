import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Core from './Core.jsx';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Core} />
        </Switch>
      </BrowserRouter>
    );
  }
}
