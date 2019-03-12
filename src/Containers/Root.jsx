import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Navigation/Header.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';
import Footer from '../Navigation/Footer.jsx';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={CurrentWeather} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
