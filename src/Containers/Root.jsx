import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Navigation/Header.jsx';
import Forecast from '../Components/ForeCastWeather/Forecast.jsx';
import Weather from '../Components/CurrentWeather/Weather.jsx';
//import Footer from '../Navigation/Footer.jsx';
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
            <Route exact path="/" component={Weather} />
            <Route path="/forecast" component={Forecast} />
            <Route component={ErrorPath} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
