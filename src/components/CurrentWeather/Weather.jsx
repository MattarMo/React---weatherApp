/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import EnterLocationWeather from './EnterLocationWeather.jsx';
import DisplayWeather from './DisplayWeather.jsx';
import { connect } from 'react-redux';
import api from '../../api';
import * as actionTypes from '../../store/actions';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your Current Weather for today'
    };
  }

  render() {
    return (
      <div>
        <EnterLocationWeather
          title={this.state.title}
          cityvalue={this.props.searchCity}
          countryvalue={this.props.searchCountry}
          inputchangecity={this.props.handleInputCityChange}
          inputchangecountry={this.props.handleInputCountryChange}
          getWeather={this.props.getWeather}
        />
        <DisplayWeather
          temperature={this.props.temperature}
          description={this.props.description}
          icon={this.props.icon}
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    temperature: undefined,
    description: undefined,
    icon: undefined,
    error: state.error,
    searchCity: state.searchForecastCityInput,
    searchCountry: state.searchForecastCountryInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputCityChange: e => {
      dispatch({
        type: actionTypes.SEARCH_WEATHERCITY_INPUT,
        cityvalue: e.target.value
      });
    },
    handleInputCountryChange: e => {
      dispatch({
        type: actionTypes.SEARCH_WEATHERCOUNTRY_INPUT,
        countryvalue: e.target.value
      });
    },
    getWeather: (e, city, country) => {
      e.preventDefault();
      api.getWeather(dispatch, city, country);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);
