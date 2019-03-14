import React, { Component } from 'react';
import axios from 'axios';
import EnterLocation from './EnterLocation.jsx';
import DisplayWeather from './DisplayWeather.jsx';

const API_KEY = '3958ce557d2539d832f7953ea777aa82';

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your Current Weather for today',
      temperature: undefined,
      city: undefined,
      country: undefined,
      error: undefined
    };

    this.currentGetWeatherCall = this.currentGetWeatherCall.bind(this);
  }

  currentGetWeatherCall(e) {
    e.preventDefault();
    const getCity = e.target.city.value;
    const getCountry = e.target.country.value;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${getCity},${getCountry}&appid=${API_KEY}&units=imperial`
      )
      .then(res => {
        const weatherData = res.data;
        this.setState({
          title: 'Get your Current Weather for today',
          temperature: weatherData.main.temp,
          city: weatherData.name,
          country: weatherData.sys.country,
          error: ''
        });
      })
      .catch(() => {
        this.setState({
          title: 'Get your Current Weather for today',
          temperature: undefined,
          city: undefined,
          country: undefined,
          error:
            'Please enter a city and country(must be a real and matching city to country)'
        });
      });
  }

  render() {
    return (
      <div>
        <EnterLocation
          currentGetWeatherCall={this.currentGetWeatherCall}
          title={this.state.title}
        />
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
