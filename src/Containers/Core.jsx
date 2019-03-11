import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Navigation/Header.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';
import Footer from '../Navigation/Footer.jsx';
import Forecast from '../components/Forecast.jsx';

export default class Core extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/current-weather" component={CurrentWeather} />
        <Route path="/forecast" component={Forecast} />
        <Footer />
      </div>
    );
  }
}
