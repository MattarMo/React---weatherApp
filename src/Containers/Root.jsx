import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Navigation/Header.jsx';
import Forecast from '../components/Forecast.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';
import Footer from '../Navigation/Footer.jsx';
import ErrorPath from '../components/ErrorPath.jsx';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <br />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={CurrentWeather} />
            <Route path="/forecast" component={Forecast} />
            <Route component={ErrorPath} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
