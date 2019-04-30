import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Navigation/Header.jsx';
import Forecast from '../Components/ForeCastWeather/Forecast.jsx';
import Weather from '../Components/CurrentWeather/Weather.jsx';
import ErrorPath from '../components/ErrorPath.jsx';
import { configureStore } from '../store/configureStore';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <BrowserRouter>
          <>
            <Header />
            <br />
            <br />
            <br />
            <Switch>
              <Route exact path="/" component={Weather} />
              <Route path="/forecast" component={Forecast} />
              <Route component={ErrorPath} />
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}
