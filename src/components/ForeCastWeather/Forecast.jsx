/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import EnterLocationForecast from './EnterLocationForecast.jsx';
import DisplayForecast from './DisplayForecast.jsx';
import { connect } from 'react-redux';
import api from '../../api';
import * as actionTypes from '../../store/actions';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your 5 day Forecast'
    };
  }

  render() {
    return (
      <div>
        <EnterLocationForecast
          title={this.state.title}
          cityvalue={this.props.searchCity}
          countryvalue={this.props.searchCountry}
          inputchangecity={this.props.handleInputCityChange}
          inputchangecountry={this.props.handleInputCountryChange}
          getForecast={this.props.getForeCast}
        />
        <DisplayForecast
          forecastData={this.props.forecastDataList}
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    forecastDataList: state.forecastData,
    error: state.error,
    searchCity: state.searchForecastCityInput,
    searchCountry: state.searchForecastCountryInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputCityChange: e => {
      dispatch({
        type: actionTypes.SEARCH_FORECASTCITY_INPUT,
        cityvalue: e.target.value
      });
    },
    handleInputCountryChange: e => {
      dispatch({
        type: actionTypes.SEARCH_FORECASTCOUNTRY_INPUT,
        countryvalue: e.target.value
      });
    },
    getForeCast: (e, city, country) => {
      e.preventDefault();
      api.getForecast(dispatch, city, country);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);
