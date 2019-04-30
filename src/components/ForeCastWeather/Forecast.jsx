import React, { Component } from 'react';
import EnterLocationForecast from './EnterLocationForecast.jsx';
import DisplayForecast from './DisplayForecast.jsx';
import { connect } from 'react-redux';
import api from '../../api';

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
          // eslint-disable-next-line react/prop-types
          cityvalue={this.props.searchCity}
          // eslint-disable-next-line react/prop-types
          countryvalue={this.props.searchCountry}
          // eslint-disable-next-line react/prop-types
          inputchangecity={this.props.handleInputCityChange}
          // eslint-disable-next-line react/prop-types
          inputchangecountry={this.props.handleInputCountryChange}
          // eslint-disable-next-line react/prop-types
          getForecast={this.props.getForeCast}
        />
        <DisplayForecast
          // eslint-disable-next-line react/prop-types
          forecastData={this.props.forecastDataList}
          // eslint-disable-next-line react/prop-types
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.forecastTitle,
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
        type: 'SEARCH_FORECASTCITY_INPUT',
        cityvalue: e.target.value
      });
    },
    handleInputCountryChange: e => {
      dispatch({
        type: 'SEARCH_FORECASTCOUNTRY_INPUT',
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
