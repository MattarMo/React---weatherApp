import React, { Component } from 'react';
import axios from 'axios';
import EnterLocationWeather from './EnterLocationWeather.jsx';
import DisplayWeather from './DisplayWeather.jsx';
import { connect } from 'react-redux';

const API_KEY = '3958ce557d2539d832f7953ea777aa82';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your Current Weather for today',
      datetime: undefined,
      temperature: undefined,
      description: undefined,
      icon: undefined,
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
        console.log(weatherData);
        this.setState({
          title: 'Get your Current Weather for today',
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
          error: ''
        });
      })
      .catch(() => {
        this.setState({
          title: 'Get your Current Weather for today',
          temperature: undefined,
          description: undefined,
          icon: undefined,
          error:
            'Please enter a city and country(must be a real and matching city to country)'
        });
      });
  }

  render() {
    return (
      <div>
        <EnterLocationWeather
          currentGetWeatherCall={this.currentGetWeatherCall}
          title={this.state.title}
        />
        <DisplayWeather
          temperature={this.state.temperature}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default connect()(CurrentWeather);
