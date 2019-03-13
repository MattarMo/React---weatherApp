import React, { Component } from 'react';
import axios from 'axios';
import EnterLocation from './EnterLocation.jsx';
import DisplayWeather from './DisplayWeather.jsx';

const API_KEY = '3958ce557d2539d832f7953ea777aa82';

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      error: undefined
    };

    this.apiGetWeatherCall = this.apiGetWeatherCall.bind(this);
  }

  apiGetWeatherCall(e) {
    e.preventDefault();
    const getCity = e.target.city.value;
    const getCountry = e.target.country.value;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${getCity},${getCountry}&appid=${API_KEY}&units=Imperial`
      )
      .then(res => {
        const weatherData = res.data;
        this.setState({
          temperature: weatherData.main.temp,
          city: weatherData.name,
          country: weatherData.sys.country,
          error: ''
        });
      })
      .catch(() => {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          error: 'Please enter a city and country'
        });
      });
  }

  render() {
    return (
      <div>
        <EnterLocation apiGetWeatherCall={this.apiGetWeatherCall} />
        <DisplayWeather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}
