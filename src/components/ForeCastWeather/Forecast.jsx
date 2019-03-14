import React, { Component } from 'react';
import axios from 'axios';
import EnterLocationForecast from './EnterLocationForecast.jsx';
import DisplayForecast from './DisplayForecast.jsx';

const API_KEY = '3958ce557d2539d832f7953ea777aa82';

export default class Forcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your 5 day Forecast',
      forecastData: [],
      error: undefined
    };

    this.forecastGetWeatherCall = this.forecastGetWeatherCall.bind(this);
  }

  forecastGetWeatherCall(e) {
    e.preventDefault();
    const getCity = e.target.city.value;
    const getCountry = e.target.country.value;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${getCity},${getCountry}&appid=${API_KEY}&units=Imperial`
      )
      .then(res => {
        const weatherData = res.data;
        console.log(weatherData);
        this.setState({
          title: 'Get your 5 day forecast',
          forecastData: weatherData.list,
          error: ''
        });
      })
      .catch(() => {
        this.setState({
          title: 'Get your 5 day forecast',
          forecastData: [],
          error:
            'Please enter a city and country(must be a real and matching city to country)'
        });
      });
  }

  render() {
    return (
      <div>
        <EnterLocationForecast
          title={this.state.title}
          forecastGetWeatherCall={this.forecastGetWeatherCall}
        />
        <DisplayForecast
          forecastData={this.state.forecastData}
          error={this.state.error}
        />
      </div>
    );
  }
}
